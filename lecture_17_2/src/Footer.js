function Footer({ updateName }) {
    return (
        <>
            <div style={{ 'backgroundColor': 'blue' }}> I am footer</div>
            <button onClick={updateName}>Update Name</button>
        </>
    )
}

export default Footer;