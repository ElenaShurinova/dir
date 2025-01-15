import React from "react";
import { useSelector} from "react-redux";


export default function UsersContainer(){
    const usersState = useSelector(store => store.users);

    return(
    <div>
        {

        usersState.map(el => <UseCard key={el.id} {...el}/>)
     

}
    </div>
    )
}

