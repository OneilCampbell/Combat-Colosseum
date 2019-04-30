const { User, Score } = require("../models/models")

const Main = async () => {
    try {
        await User.destroy({ where: {} });  
        await Score.destroy({ where: {} });  

        const user1 = await User.create({
            email: "creator@developer.org",
            username: "The OG",
            password: "1234"
        });

        const user2 = await User.create({
            email: "tester@example.com",
            username: "Blue Lightning",
            password: "abcde"
        });

        const user3 = await User.create({
            email: "example@tester.com",
            username: "Volcanic Shadow",
            password: "qwert"
        });

        const score1 = await Score.create({
            score: 1000
        });

        const score2 = await Score.create({
            score: 500
        });

        const score3 = await Score.create({
            score: 250
        });

        const score4 = await Score.create({
            score: 700
        });

        const score5 = await Score.create({
            score: 450
        });

        const score6 = await Score.create({
            score: 650
        });

        await score1.setUser(user1);
        await score2.setUser(user3);
        await score3.setUser(user2);
        await score4.setUser(user1);
        await score5.setUser(user2);
        await score6.setUser(user1);

    } catch (error) {
        console.log(error);
    }
    process.exit();
}

Main();