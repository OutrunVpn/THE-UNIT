// looping-reality.js

class ApartmentLoop {
    constructor() {
        this.rooms = {};
        this.createRooms();
    }

    createRooms() {
        this.rooms = {
            'livingRoom': { state: 'locked' },
            'kitchen': { state: 'locked' },
            'bedroom': { state: 'locked' },
            'bathroom': { state: 'locked' }
        };
    }

    passThroughCorridor() {
        this.shiftLayout();
        this.updateRoomStates();
    }

    shiftLayout() {
        const roomKeys = Object.keys(this.rooms);
        for (let key of roomKeys) {
            // Randomly swap room states
            this.rooms[key].state = Math.random() > 0.5 ? 'open' : 'locked';
        }
    }

    updateRoomStates() {
        for (let room in this.rooms) {
            if (Math.random() > 0.5) {
                this.rooms[room].visible = !this.rooms[room].visible;
            }
        }
    }
}

// Usage example:
const apartment = new ApartmentLoop();

// Simulate passing through the corridor
apartment.passThroughCorridor();

console.log(apartment.rooms);