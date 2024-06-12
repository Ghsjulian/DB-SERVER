export const checkEmail = text => {
    var value = text.toLocaleLowerCase();
    if (!value.includes("@") || !value.includes(".")) {
        return "Email Is Not Valid !";
    } else if (
        value.includes("%") ||
        value.includes("+") ||
        value.includes("-") ||
        value.includes("?") ||
        value.includes("{") ||
        value.includes("}") ||
        value.includes("(") ||
        value.includes(")") ||
        value.includes("[") ||
        value.includes("]") ||
        value.includes("<") ||
        value.includes(">") ||
        value.includes("=") ||
        value.includes("|") ||
        value.includes("!") ||
        value.includes(":") ||
        value.includes("'") ||
        value.includes("#") ||
        value.includes("_") ||
        value.includes("*") ||
        value.includes("$") ||
        value.includes(";") ||
        value.includes(",")
    ) {
        return "Invalid User Email !";
    } else if (
        value.includes("sexy") ||
        value.includes("fuck") ||
        value.includes("fucking") ||
        value.includes("dick") ||
        value.includes("pussy") ||
        value.includes("stupid") ||
        value.includes("nonsense") ||
        value.includes("romantic") ||
        value.includes("romance") ||
        value.includes("love") ||
        value.includes("you") ||
        value.includes("hate") ||
        value.includes("hacker") ||
        value.includes("hacking") ||
        value.includes("hack") ||
        value.includes("black") ||
        value.includes("girl") ||
        value.includes("boy") ||
        value.includes("wife") ||
        value.includes("dangerous") ||
        value.includes("player") ||
        value.includes("sucks")
    ) {
        return "Bad String Or Words";
    } else {
        return true;
    }
};

export const checkName = text => {
    var value = text.toLocaleLowerCase();
    if (
        value.includes("%") ||
        value.includes("@") ||
        value.includes(".") ||
        value.includes("+") ||
        value.includes("-") ||
        value.includes("?") ||
        value.includes("{") ||
        value.includes("}") ||
        value.includes("(") ||
        value.includes(")") ||
        value.includes("[") ||
        value.includes("]") ||
        value.includes("<") ||
        value.includes(">") ||
        value.includes("=") ||
        value.includes("|") ||
        value.includes("!") ||
        value.includes(":") ||
        value.includes("'") ||
        value.includes("#") ||
        value.includes("_") ||
        value.includes("*") ||
        value.includes("$") ||
        value.includes(";") ||
        value.includes(",")
    ) {
        return "Invalid User Name";
    } else if (
        value.includes("sexy") ||
        value.includes("fuck") ||
        value.includes("sex") ||
        value.includes("fucking") ||
        value.includes("dick") ||
        value.includes("pussy") ||
        value.includes("stupid") ||
        value.includes("nonsense") ||
        value.includes("romantic") ||
        value.includes("romance") ||
        value.includes("love") ||
        value.includes("you") ||
        value.includes("hate") ||
        value.includes("hacker") ||
        value.includes("hacking") ||
        value.includes("hack") ||
        value.includes("black") ||
        value.includes("girl") ||
        value.includes("boy") ||
        value.includes("wife") ||
        value.includes("dangerous") ||
        value.includes("player") ||
        value.includes("sucks")
    ) {
        return "Bad String Or Words";
    } else {
        return true;
    }
};
