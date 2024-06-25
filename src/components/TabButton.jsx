export default function TabButton({children, isSelected, ...props}){
    return (
        <>
        <li><button className={isSelected ? 'active' : '' } {...props} >{children}</button></li>
        </>

    ) 
}


// export function AnotherBtn ({children, onSelect, isSelected}){
//     return (
//         <>
//         <li><button className={isSelected ? 'Active' : '' } onClick={onSelect}>{children}</button>
//         </li></>
//     )
// }