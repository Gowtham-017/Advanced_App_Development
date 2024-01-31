// ParentComponent.js
import { useState } from 'react';
import CreateEvent from './CreateEvent';
import Events from './Events';

function ParentComponent() {
    const [formData, setFormData] = useState(null);

    const handleEventCreate = (data) => {
        setFormData(data);
    };

    return (
        <div>
            <CreateEvent onEventCreate={handleEventCreate} />
            <Events formData={formData} />
        </div>
    );
}

export default ParentComponent;
