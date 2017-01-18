declare var $: any;

class SimpleButton {
    button: HTMLButtonElement;

    constructor(element: HTMLElement) {
        this.button = document.createElement("button");
        this.button.innerText = "Click me!";
        this.button.onclick = this.throwAnException;
        element.appendChild(this.button);
    }

    private throwAnException(this: HTMLElement, ev: MouseEvent): any {
        throw new Error();
    }
}

window.onload = () => {
    var el = document.getElementById("content");
    var button = new SimpleButton(el);
}

window.onerror = (message: string, filename: string, lineNo: number, colNo: Number, error: Error) => {
    var exceptionObj = {
        error: {
            name: error.name,
            message: message,
            file: filename,
            row: lineNo,
            column: colNo
        },
        url: window.location.host
    };

    $.ajax({
        url: "https://NAME_OF_FUNCTIONS_APP.azurewebsites.net/api/NAME_OF_FUNCTION?code=FUNCTION_CODE",
        type: "POST",
        data: JSON.stringify(exceptionObj),
        'processData': false,
        contentType: "application/json",
        success: (data, type, obj) => {
            console.log(type);
        },
        error: (data) => {
            console.error(data);
        }
    });
}