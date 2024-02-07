
/*Pai */
{
const username = “maria”
<Painel username={ username }/>
}


/*Filho */
export default function Painel(props) { 
    return <div>{props.username}</div>
 }