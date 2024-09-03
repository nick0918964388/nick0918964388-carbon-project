import React, { useState, useEffect } from 'react';
import { Checkbox, Button, TextInput } from '@carbon/react';
import { InlineLoading } from '@carbon/react';


const SubmitButton = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [description, setDescription] = useState('Submitting...');
    const [ariaLive, setAriaLive] = useState('off');
    const handleSubmit = () => {
      setIsSubmitting(true);
      setAriaLive('assertive');
  
      // Instead of making a real request, we mock it with a timer
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccess(true);
        setDescription('Submitted!');
  
        // To make submittable again, we reset the state after a bit so the user gets completion feedback
        setTimeout(() => {
          setSuccess(false);
          setDescription('Submitting...');
          setAriaLive('off');
        }, 1500);
      }, 2000);
    };


    return (
        <div>
            {isSubmitting || success ? <InlineLoading style={{
                    marginLeft: '1rem'
                  }} description={description} status={success ? 'finished' : 'active'} aria-live={ariaLive} /> : <Button onClick={handleSubmit}>Submit</Button>}
        </div>
    )
}

export default SubmitButton;