"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const robot = { x: 5, y: 5, dir: "N" };
class Room {
    constructor(x, y, robot) {
        this.x = x;
        this.y = y;
        this.robot = robot;
    }
    move(direction) {
        const pos = {
            x: this.robot.x,
            y: this.robot.y,
        };
        const cardinalSwitch = {
            N: {
                D: "E",
                G: "W",
            },
            E: {
                D: "S",
                G: "N",
            },
            S: {
                D: "W",
                G: "E",
            },
            W: {
                D: "N",
                G: "S",
            },
        };
        if (direction === "G" || direction === "D") {
            this.robot.dir = cardinalSwitch[this.robot.dir][direction];
        }
        else if (direction !== "A") {
            null;
        }
        else {
            let tryMove = { x: pos.x, y: pos.y };
            if (this.robot.dir === "N") {
                tryMove.y += 1;
            }
            else if (this.robot.dir === "E") {
                tryMove.x += 1;
            }
            else if (this.robot.dir === "S") {
                tryMove.y -= 1;
            }
            else if (this.robot.dir === "W") {
                tryMove.x -= 1;
            }
            if (tryMove.x >= 0 &&
                tryMove.x < this.x &&
                tryMove.y >= 0 &&
                tryMove.y < this.y) {
                if (this.robot.dir === "N") {
                    this.robot.y += 1;
                }
                else if (this.robot.dir === "E") {
                    this.robot.x += 1;
                }
                else if (this.robot.dir === "S") {
                    this.robot.y -= 1;
                }
                else if (this.robot.dir === "W") {
                    this.robot.x -= 1;
                }
            }
            else {
                null;
            }
        }
        return robot;
    }
}
let xSize = 10;
let ySize = 10;
let robotX = 5;
let robotY = 5;
let robotDir = "N";
let instructions = "DADADADAA";
let room = new Room(xSize, ySize, robot);
const setupRoom = () => {
    console.log("******");
    const xSizeInput = parseInt(prompt("Entrez la largeur de la pièce : "), 10);
    const ySizeInput = parseInt(prompt("Entrez la hauteur de la pièce : "), 10);
    if (xSizeInput <= 0 ||
        ySizeInput <= 0 ||
        isNaN(xSizeInput) === true ||
        isNaN(ySizeInput) === true) {
        xSize = 10;
        ySize = 10;
        console.log("Données de la pièce incorrectes, utilisation des dimensions par défaut");
    }
    else {
        xSize = xSizeInput;
        ySize = ySizeInput;
        console.log(`Les dimensions de la pièce sont maintenant les suivantes : X : ${xSize}, Y : ${ySize}`);
    }
    console.log("******");
    navMenu();
};
const positionRobot = () => {
    console.log("******");
    const inputRobotX = parseInt(prompt("Entrez la position X de départ du robot : "), 10);
    const inputRobotY = parseInt(prompt("Entrez la position Y de départ du robot : "), 10);
    const inputRobotDir = prompt("Entrez l'orientation de départ du robot (N, E, S, W): ").toUpperCase();
    robotX = 5;
    robotY = 5;
    robotDir = "N";
    if (inputRobotX - 1 > xSize || inputRobotX - 1 < 0 || isNaN(inputRobotX)) {
        console.log("Position X incorrecte, utilisation des valeurs par défaut pour X et Y avec orientation Nord");
    }
    else if (inputRobotY - 1 > ySize ||
        inputRobotY - 1 < 0 ||
        isNaN(inputRobotY)) {
        console.log("Position Y incorrecte, utilisation des valeurs par défaut pour X et Y avec orientation Nord");
    }
    else if (!["N", "E", "S", "W"].includes(inputRobotDir)) {
        console.log("Orientation choisie incorrecte, utilisation des valeurs par défaut pour X et Y avec orientation Nord");
    }
    else {
        robotX = inputRobotX;
        robotY = inputRobotY;
        robotDir = inputRobotDir;
        console.log(`Le robot est maintenant positionné a l'emplacement qui suit : X : ${robotX}, Y : ${robotY} et tourné dans la direction ${robotDir}`);
    }
    console.log("******");
    navMenu();
};
const programSelection = () => {
    console.log("******");
    const instructionsInput = prompt("Entrez les directions du robot (A, D ou G, exemple : DADADADAA) : ").toUpperCase();
    if (instructionsInput
        .split("")
        .every((elem) => ["A", "D", "G"].includes(elem)) &&
        instructionsInput !== "") {
        instructions = instructionsInput;
    }
    else {
        instructions = "DADADADAA";
        console.log("Instructions invalides, utilisation de la valeur par défaut DADADADAA");
    }
    console.log("******");
    navMenu();
};
const programDisplay = () => {
    console.log("******");
    console.log("La configuration actuelle est la suivante : ");
    console.log(`Piece a nettoyer de dimensions ${xSize} par ${ySize}`);
    console.log(`Le robot est positionné a l'emplacement de coordonnées ${robotX},${robotY} et est tourné dans la direction ${robotDir}`);
    console.log(`Le robot est programmé pour accomplir le programme suivant : ${instructions}`);
    console.log("******");
    navMenu();
};
const startProgram = (config) => {
    console.log("******");
    robot.x = robotX;
    robot.y = robotY;
    robot.dir = robotDir;
    room.x = xSize;
    room.y = ySize;
    room.robot = robot;
    const newConfig = config.split("");
    for (let i = 0; i < newConfig.length; i++) {
        room.move(newConfig[i]);
    }
    console.log(room.robot);
};
const navMenu = () => {
    let lockConfig = false;
    const outOfBounds = () => {
        console.log(">>> ATTENTION : la configuration indique que le robot est hors de la pièce, vous ne pourrez pas exécuter le programme avant d'avoir corrigé le positionnement.");
        lockConfig = true;
    };
    console.log("******");
    console.log("1. Démarrage du programme de test");
    console.log("2. Configurer la salle à nettoyer");
    console.log("3. Positionner le robot aspirateur");
    console.log("4. Entrer un programme de nettoyage");
    console.log("5. Afficher la configuration actuelle");
    console.log("6. Executer le programme choisi");
    if (xSize < robotX || ySize < robotY) {
        outOfBounds();
    }
    const menu = {
        "1": startProgram,
        "2": setupRoom,
        "3": positionRobot,
        "4": programSelection,
        "5": programDisplay,
        "6": startProgram,
    };
    const select = prompt("Choisissez une option ci-dessus en entrant son numéro ou une autre valeur pour sortir de l'application. ");
    if (menu[select] !== undefined) {
        if (select === "1") {
            menu[select]("DADADADAA");
        }
        else if (select === "6") {
            if (lockConfig) {
                navMenu();
            }
            else {
                menu[select](instructions);
            }
        }
        else {
            menu[select]();
        }
    }
};
navMenu();
