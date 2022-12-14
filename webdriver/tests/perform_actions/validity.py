import pytest

from tests.support.asserts import assert_error, assert_success


def perform_actions(session, actions):
    return session.transport.send(
        "POST",
        "/session/{session_id}/actions".format(session_id=session.session_id),
        {"actions": actions})


@pytest.mark.parametrize("action_type", ["none", "key", "pointer"])
def test_pause_duration_invalid_type(session, action_type):
    for invalid_type in [0.1, None, "foo", True, [], {}]:
        actions = [{
            "type": action_type,
            "id": "foobar",
            "actions": [{
                "type": "pause",
                "duration": invalid_type
            }]
        }]
        response = perform_actions(session, actions)
        assert_error(response, "invalid argument")


@pytest.mark.parametrize("action_type", ["none", "key", "pointer"])
def test_pause_duration_invalid_value(session, action_type):
    actions = [{
        "type": action_type,
        "id": "foobar",
        "actions": [{
            "type": "pause",
            "duration": -1
        }]
    }]
    response = perform_actions(session, actions)
    assert_error(response, "invalid argument")


@pytest.mark.parametrize("action_type", ["none", "key", "pointer"])
def test_pause_duration_valid(session, action_type):
    for valid_duration in [0, 1]:
        actions = [{
            "type": action_type,
            "id": "foobar",
            "actions": [{
                "type": "pause",
                "duration": valid_duration
            }]
        }]
        response = perform_actions(session, actions)
        assert_success(response)


@pytest.mark.parametrize("action_type", ["none", "key", "pointer"])
def test_pause_without_duration(session, action_type):
    actions = [{
        "type": action_type,
        "id": "foobar",
        "actions": [{
            "type": "pause",
        }]
    }]
    response = perform_actions(session, actions)
    assert_success(response)


@pytest.mark.parametrize("action_type", ["none", "key", "pointer"])
def test_action_without_id(session, action_type):
    actions = [{
        "type": action_type,
        "actions": [{
            "type": "pause",
            "duration": 1
        }]
    }]
    response = perform_actions(session, actions)
    assert_error(response, "invalid argument")
