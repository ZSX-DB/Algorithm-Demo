class ParkingSystem {
    constructor(big, medium, small) {
        this.info = [null, big, medium, small]
    }

    addCar(carType) {
        if (this.info[carType] > 0) {
            this.info[carType]--
            return true
        } else {
            return false
        }
    }

}
