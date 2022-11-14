import React, {useState} from 'react';
import Child from './Child';

export default function Parent() {
    const [data,setData] = useState('');

    const parentToChild = () => {
        setData("Hello shivam..., this is a dummy message from parent component!");
    }

    return (
        <div>
            <Child parentToChild={data}/>
            <button onClick={parentToChild}> Send message to Child component</button>
        </div>

    )
}
