import './message.css'

const Message = ({ error }) => {
    let { status, statusText } = error;
    return (
        <div className='message'>
            <div>
                Status: {status}
                <br />
                Message: {statusText}
            </div>
            <div>
                <img width="100" src="https://cdn.quotesgram.com/img/82/68/690673749-homersimpsondoh.png" alt="homero simsomps" />
            </div>
        </div>

    );
};

export default Message;