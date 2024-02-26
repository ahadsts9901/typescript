function narrow(value: null | string | string[]) {

    if (value) {

        if (typeof value === "object") {

            for (let i = 0; i < value.length; i++) {

                console.log(value[i]);

            }

        } else if (typeof value === "string") {

            console.log(value);

        }
    }
}