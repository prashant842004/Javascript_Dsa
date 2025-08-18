function eat()
{
    console.log("I'm eating");
}

function sleep()
{
    console.log("I am Sleeping");
}

function love() {
    console.log("I am loving");
}

(function repeat() {
    eat();
    sleep();
    love();
    repeat();
})();