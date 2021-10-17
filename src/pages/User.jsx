import VerticalTabs from "../components/VerticalTabs";
import ManagingUsers from "../components/ManagingUsers";


const User = () => {
    const themes = [
        'light',
        'dark'
    ];
    const labels = ['Настройки аккаунта', 'Управление пользователями (для админа)']
    const pages = [<ManagingUsers/>, <ManagingUsers/>];
    return (
        <div>
            <VerticalTabs labels={labels} pages={pages}> </VerticalTabs>
        </div>
    );
};

export default User;
