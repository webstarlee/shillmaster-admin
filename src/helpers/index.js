export * from './fetch-wrapper';

const myPlugin = {
    install(app) {
        app.config.globalProperties.$numFormat = (key) => {
            return Number(key).toLocaleString();
        },
        app.config.globalProperties.$numFormatWithDollar = (key) => {
            return key ? '$' + Number(key).toLocaleString() : '-';
        },
        app.config.globalProperties.$getMultiple = (num1, num2) => {
            const number1 = Number(num1)
            const number2 = Number(num2)
            return (number1/number2).toFixed(2)+'x';
        },
        app.config.globalProperties.$isActive = (status) => {
            return status === "active"? true: false
        }
    }
}
 
export default myPlugin;