import { LoaderCircle } from 'lucide-react';
import React from 'react';

const Loading = () => {
    return (
        <div className='h-[80vh] grid place-items-center'>
            <LoaderCircle size={64} className="text-primary animate-spin" />
        </div>
    );
}

export default Loading;
