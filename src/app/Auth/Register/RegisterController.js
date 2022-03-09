class RegisterController {
    register() {
        try {
            console.log("register");
        } catch (e) {
            console.error("RegisterController::register", e);
        }
    }
}

export default new RegisterController();
