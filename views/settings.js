let Settings = {
    render: async () => {
        return `
        <body>
            <header>
                <a href="/#/chat" id="logo">Chat</a>
                <nav>
                    <a href="#"><i class="far fa-moon"></i></a>
                    <a href="#/add-chat"><i class="fas fa-plus-circle"></i></a>
                    <a href="#/settings"><i class="fas fa-user-cog"></i></a>
                    <a href="#" id="logout-btn"><i class="fas fa-sign-out-alt"></i></a>
                </nav>
            </header>
            <main>
                <form class="settings-form" method="POST">
                    <img class="user-avatar" src="layout/images/default-avatar.png">
                    <input type="text" placeholder="new nickname" name="nickname" value="Alex" required />
                    <input type="file" name="file" class="inputfile" accept="image/*"/>
                    <input type="submit" value="APPLY CHANGES">
                </form>
            </main>
        </body>
        `;
    },

    afterRender: async() => {
        const logoutBtn = document.getElementById("logout-btn");

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                auth.signOut();
            })
        }
    }
};

export default Settings;