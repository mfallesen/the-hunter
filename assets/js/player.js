// TODO: Player abilities
// TODO: Movement
// TODO: Shoot
// TODO: Death
// TODO: Number of arrows
// TODO:
const Player = {
    quiver: 5,
    isAlive: true,
    shoot: () => {
        console.log("pew");
        quiver - 1
    },
    move: () => {
        console.log("moving");
    },
}