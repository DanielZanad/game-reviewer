use crate::app::entities::{password::Password,user::User};
use uuid::Uuid;

#[test]
fn it_should_be_able_to_create_an_user() {
    let user_id = Uuid::new_v4();
    let user_name = String::from("walter");
    let user_email = String::from("walter@white.com");
    let user_password = String::from("fjf2hf28n38223");

    let user = User::new(
        user_id,
        user_name.clone(),
        user_email.clone(),
        user_password,
    );

    assert_eq!(*user.get_id(), user_id);
    assert_eq!(*user.get_name(), user_name);
    assert_eq!(*user.get_email(), user_email);
}
