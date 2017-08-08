"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarData = (function () {
    function CarData() {
    }
    CarData.prototype.createDb = function () {
        var cars = [
            {
                'id': 1,
                'carName': 'Bugatti Chiron',
                'carModel': 'BUG06A',
                // tslint:disable-next-line:max-line-length
                'description': 'Maximum driving performance, breath-taking beauty and fascinating technology combined to create an incomparable driving experience. Ladies and Gentlemen turn up your volume and start your engines',
                'rating': 5,
                'imageUrl': 'app/assets/images/cars/bugatti-chiron.jpg',
                'tags': ['bugatti', 'fastest car'],
                'company': 'Bugatti'
            },
            {
                'id': 2,
                'carName': 'Bugatti Veyron',
                'carModel': '16.4 Super Sport',
                // tslint:disable-next-line:max-line-length
                'description': 'supposed to meet: over 1,000 hp, a top speed of over 400 km/h and the ability to accelerate from 0 to 100 in under three seconds.',
                'rating': 5,
                'imageUrl': 'app/assets/images/cars/bugatti-veyron-ss.jpg',
                'tags': ['bugatti', 'fastest car'],
                'company': 'Bugatti'
            },
            {
                'id': 3,
                'carName': 'CCR - Koenigsegg',
                'carModel': 'regera',
                // tslint:disable-next-line:max-line-length
                'description': 'claimed the CCR to be the fastest production car with a theoretical top speed of more than 395 km/h (245 mph).',
                'rating': 4,
                'imageUrl': 'app/assets/images/cars/ccr.jpg',
                'company': 'Koenigsegg'
            },
            {
                'id': 4,
                'carName': 'Hennessey',
                'carModel': 'Venom GT',
                // tslint:disable-next-line:max-line-length
                'description': 'set a Guinness World Record for the fastest production car from 0–186 miles per hour (0–300 km/h) with an average acceleration time of 13.63 seconds.[2] In addition, the car set an unofficial record for 0–200 mph (0–322 km/h) acceleration at 14.51 seconds, beating the Koenigsegg Agera R\'s time of 17.68 seconds, making it the unofficial fastest accelerating production car in the world.',
                'rating': 4,
                'imageUrl': 'app/assets/images/cars/hennessey-venom.jpg',
                'company': 'Hennessey Performance Engineering'
            },
            {
                'id': 5,
                'carName': 'Ferrari',
                'carModel': 'Laferrari',
                // tslint:disable-next-line:max-line-length
                'description': 'The LaFerrari is based on findings from testing of the FXX[5] and on research being conducted by the Millechili Project at the University of Modena. Association with the Millechili Project led to speculation during development that the car would weigh under 1,000 kg (2,205 lb),[8] but a dry weight of around 1,255 kg (2,767 lb) was claimed.[9] Only 499 units have been built, and each cost more than 1 million US dollars. An additional 500th car was later made to be sold at an auction',
                'rating': 4,
                'imageUrl': 'app/assets/images/cars/laferrari.jpg',
                'company': 'Ferrari'
            },
            {
                'id': 6,
                'carName': 'mclaren F1',
                'carModel': 'GTR',
                // tslint:disable-next-line:max-line-length
                'description': 'The McLaren F1 GTR was a racing variant of the McLaren F1 sports car first produced in 1995 for grand touring style racing, such as the BPR Global GT Series, FIA GT Championship, JGTC, and British GT Championship. It is most famous for its overall victory at the 1995 24 Hours of Le Mans where it won against faster purpose-built prototypes. McLaren F1 GTRs raced internationally until 2005 when the final race chassis was retired.',
                'rating': 3,
                'imageUrl': 'app/assets/images/cars/mclaren-f1.jpg',
                'company': 'McLaren-Honda'
            },
            {
                'id': 7,
                'carName': 'mclaren P1',
                'carModel': '675LT',
                // tslint:disable-next-line:max-line-length
                'description': 'was the fastest production car in the world – setting a record of 240.1mph – its greatest legacy was its technical innovation. It was the first road car to be built around a carbon fibre tub, a technology pioneered by McLaren in Formula 1, and one that lies at the heart of all of our current models',
                'rating': 3,
                'imageUrl': 'app/assets/images/cars/mclaren-p1.jpg',
                'company': 'McLaren-Honda'
            },
            {
                'id': 8,
                'carName': 'Aston Martin',
                'carModel': 'One-77',
                // tslint:disable-next-line:max-line-length
                'description': 'a sports car of unparalleled beauty with subtle aggression and performance developed in 2008 and 2009 with the goal of eclipsing any previous Aston Martin road car.',
                'rating': 3,
                'imageUrl': 'app/assets/images/cars/one-77.jpg',
                'company': 'Aston Martin Lagonda Limited'
            },
            {
                'id': 9,
                'carName': 'Shelby SSC Aero TT',
                'carModel': 'Bullet Aluminum V8 Block',
                'description': 'its  timed at 256.14 mph (412.22 km/h)) until the introduction of the Bugatti Veyron Super Sport in 2010',
                'rating': 4,
                'imageUrl': 'app/assets/images/cars/sscaero.jpg',
                'company': 'SSC North America'
            },
            {
                'id': 10,
                'carName': 'Jaguar',
                'carModel': 'XJ220',
                'description': 'officially recorded a top speed of 212.3 mph (341.7 km/h) during testing by Jaguar',
                'rating': 3,
                'imageUrl': 'app/assets/images/cars/xj220.jpg',
                'company': 'Jaguar Cars'
            },
            {
                'id': 11,
                'carName': 'Lamborghini',
                'carModel': 'Veneno Roadster',
                // tslint:disable-next-line:max-line-length
                'description': 'takes the aerodynamic efficiency of a racing prototype onto everyday roads. This super sports car is characterized by optimal aerodynamics in order to guarantee stability in fast curves and a behavior like a racing prototype. All of this on a car devised for the road. The perfect car for sports-driving lovers.',
                'rating': 3,
                'imageUrl': 'app/assets/images/cars/lamborghini.jpg',
                'company': 'Automobili Lamborghini S.p.A.'
            },
            {
                'id': 12,
                'carName': 'Bentley',
                'carModel': 'Continental Supersports',
                // tslint:disable-next-line:max-line-length
                'description': 'is equipped with a 6.0 litre twin-turbocharged W12 engine, which produces a DIN-rated motive power output of 560 metric horsepower (412 kW; 552 bhp) at 6,100 rpm, and torque of 650 newton metres (479 lbf·ft) at 1,600-6,100 rpm.[2] Torsen-based permanent four-wheel drive is standard.[2] It will accelerate from 0 to 100 kilometres per hour (0.0 to 62.1 mph) in 4.8 seconds, and go on to reach a top speed of 318 kilometres per hour (197.6 mph)',
                'rating': 3,
                'imageUrl': 'app/assets/images/cars/bentley.jpg',
                'company': 'Bentley Motors Limited'
            },
            {
                'id': 13,
                'carName': 'Maserati',
                'carModel': 'Quattroporte GTS',
                // tslint:disable-next-line:max-line-length
                'description': 'The Maserati tagline is Luxury, sports and style cast in exclusive cars. ultra-luxury performance automobiles with timeless Italian style, accommodating bespoke interiors, and effortless, signature sounding power',
                'rating': 3,
                'imageUrl': 'app/assets/images/cars/Maserati.jpg',
                'company': 'Maserati S.p.A.'
            }
        ];
        return { cars: cars };
    };
    return CarData;
}());
exports.CarData = CarData;
//# sourceMappingURL=car-data.js.map