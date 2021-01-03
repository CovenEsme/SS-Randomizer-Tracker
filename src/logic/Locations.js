import _ from 'lodash'
import ItemLocation from './ItemLocation';

class Locations {
    constructor(locationsFile) {
        this.locations = {};
        _.forEach(locationsFile, (data, name) => {
            const {
                area,
                location
            } = this.splitLocationName(name);
            let itemLocation = ItemLocation.emptyLocation();
            itemLocation.name = location;
            this.setLocation(area, location, itemLocation)
        });
    }

    initialize(locations) {
        this.locations = locations;
    }

    reset() {
        this.locations = null;
    }

    all() {
        return this.locations;
    }

    allAreas() {
        return _.keys(this.locations)
    }

    mapLocations(locationIteratee) {
        const newLocations = {};
        _.forEach(this.locations, (areaData, areaName) => {
            _.forEach(_.keys(areaData), (location) => {
                _.set(newLocations, [areaName, location], locationIteratee(areaName, location));
            });
        });
        return newLocations;
    }

    locationsForArea(area) {
        const areaInfo = _.get(this.locations, area);
        if (!areaInfo) {
            throw Error(`Area ${area} not found`);
        }
        return _.values(areaInfo);
    }

    getLocation(area, location) {
        if (!_.has(this.locations, [area, location])) {
            throw Error(`Location not found: ${area} - ${location}`)
        }
        return _.get(this.locations, [area, location]);
    }

    setLocation(area, location, itemLocation) {
        _.set(this.locations, [area, location], itemLocation);
    }

    splitLocationName(name) {
        const locationElements = name.split('-');
        return {
            area: locationElements[0].trim(),
            location: locationElements.splice(1).join().trim(),
        }
    }
}

export default Locations;