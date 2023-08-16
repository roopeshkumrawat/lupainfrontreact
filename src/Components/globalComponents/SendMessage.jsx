import React from 'react';
import sendSubmitIcon from '../../images/sendMessageSubmitIcon.png'
export default function SendMessage() {
    const showSendMessageForm = () => {
        document.querySelector(".sendMessageForm").style.display = "block";
        document.querySelector(".showPopupBtn").style.display = "none";
    }
    const hideSendMessageForm = () => {
        document.querySelector(".sendMessageForm").style.display = "none";
        document.querySelector(".showPopupBtn").style.display = "block";
    }

    return (
        <div className='sendMessage'>
            <div className='sendMessageForm' style={{ maxWidth: "350px", float: "right" }}>
                <form>
                    <div className='sendMessageCloseBtn'>
                        <span onClick={hideSendMessageForm} >&#x2716;</span>
                    </div>
                    <fieldset>
                        <h3>
                            Please fill out the form below and we will get back to you as soon as possible.
                        </h3>
                        <div className='sendMessageInnerForm'>
                            <div className='inputFields'>
                                <input type="text" id='sendMessageName' required/>
                                <label htmlFor='sendMessageName'>*Name</label>
                                <small> </small>
                            </div>
                            <div className='inputFields'>
                                <input type="email" id='sendMessageEmail' required/>
                                <label htmlFor='sendMessageEmail'>*Email</label>
                                <small> </small>
                            </div>
                            <div className='inputFields'>
                                <textarea type="text" id='sendMessageText' required/>
                                <label htmlFor='sendMessageText'>*Message</label>
                                <small> </small>
                            </div>
                            <button type='button' className='sendMessageSubmitBtn' ><img src={sendSubmitIcon} alt="icon" /> Submit</button>
                        </div>
                    </fieldset>
                </form>
            
            </div>
            <button type="button" onClick={showSendMessageForm} class="tawk-custom-color tawk-custom-border-color tawk-button showPopupBtn" tabindex="0" >
                <div>
                    <div class="tawk-text-left tawk-flex tawk-flex-middle">
                        <div class="tawk-text-truncate" style={{ width: "100%", flex: "0 0 auto" }}> Send message </div>
                        <div class="tawk-flex tawk-flex-middle" style={{ width: "100%", display: "none" }}>
                            <div class="tawk-margin-xsmall-left" style={{ overflow: "hidden", width: "100%" }}>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}
