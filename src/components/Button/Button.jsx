import cls from './Button.module.css'
const inlineStyle = {
    color: 'red',
}
const isPrimary = true;
export const Button = (props) =>{
    console.log(props)
   // return <button className={isPrimary ? cls.primary :cls.btn} >кнопка </button>
   return <button className={`${cls.btn} ${isPrimary ? cls.primary : ""}`
}>button</button>
}