export const formValidator = ({
    firstName, lastName, password, confPassword, selectedGender, email, phone,
    selectedQuestion, answer
} = {}) => {
    if (!firstName || !lastName) {
        return false;
    }
    if (
        (!password || !confPassword) &&
        (password !== confPassword)
    ) {
        return false;
    }
    if (!(selectedGender && email && phone)) {
        return false;
    }

    if (selectedQuestion && !answer) return false;

    return true;
}