
use crate::app::entities::{
    password::Password, publisher::Publisher
};

#[test]
fn it_should_be_able_to_create_a_password() {
    let password = Password::new("fjf2hf28n38223".to_string());

    assert_eq!(password.get_value(), "fjf2hf28n38223") ;
}
#[test]
#[should_panic]
fn it_should_not_be_able_to_create_a_password() {
    Password::new("1234".to_string());
}
