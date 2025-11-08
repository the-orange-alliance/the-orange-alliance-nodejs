import { ISerializable } from "../../ISerializable";

export default class AllianceDetails2425 implements ISerializable {
    private _team: number;
    private _robot1Auto: 'NONE' | 'OBSERVATION_ZONE' | 'ASCENT';
    private _robot2Auto: 'NONE' | 'OBSERVATION_ZONE' | 'ASCENT';
    private _autoSampleNet: number;
    private _autoSampleLow: number;
    private _autoSampleHigh: number;
    private _autoSpecimenLow: number;
    private _autoSpecimenHigh: number;
    private _teleopSampleNet: number;
    private _teleopSampleLow: number;
    private _teleopSampleHigh: number;
    private _teleopSpecimenLow: number;
    private _teleopSpecimenHigh: number;
    private _robot1Teleop: 'NONE' | 'OBSERVATION_ZONE' | 'ASCENT_1' | 'ASCENT_2' | 'ASCENT_3';
    private _robot2Teleop: 'NONE' | 'OBSERVATION_ZONE' | 'ASCENT_1' | 'ASCENT_2' | 'ASCENT_3';
    private _minorFouls: number;
    private _majorFouls: number;
    private _autoSamplePoints: number;
    private _autoSpecimenPoints: number;
    private _teleopSamplePoints: number;
    private _teleopSpecimenPoints: number;
    private _teleopParkPoints: number;
    private _teleopAscentPoints: number;
    private _autoPoints: number;
    private _teleopPoints: number;
    private _endGamePoints: number;
    private _foulPointsCommitted: number;
    private _preFoulTotal: number;
    private _totalPoints: number;

    constructor() {
        this._team = 0;
        this._robot1Auto = 'NONE';
        this._robot2Auto = 'NONE';
        this._autoSampleNet = 0;
        this._autoSampleLow = 0;
        this._autoSampleHigh = 0;
        this._autoSpecimenLow = 0;
        this._autoSpecimenHigh = 0;
        this._teleopSampleNet = 0;
        this._teleopSampleLow = 0;
        this._teleopSampleHigh = 0;
        this._teleopSpecimenLow = 0;
        this._teleopSpecimenHigh = 0;
        this._robot1Teleop = 'NONE';
        this._robot2Teleop = 'NONE';
        this._minorFouls = 0;
        this._majorFouls = 0;
        this._autoSamplePoints = 0;
        this._autoSpecimenPoints = 0;
        this._teleopSamplePoints = 0;
        this._teleopSpecimenPoints = 0;
        this._teleopParkPoints = 0;
        this._teleopAscentPoints = 0;
        this._autoPoints = 0;
        this._teleopPoints = 0;
        this._endGamePoints = 0;
        this._foulPointsCommitted = 0;
        this._preFoulTotal = 0;
        this._totalPoints = 0;
    }

    toJSON() {
        return {
            team: this.team,
            robot1Auto: this.robot1Auto,
            robot2Auto: this.robot2Auto,
            autoSampleNet: this.autoSampleNet,
            autoSampleLow: this.autoSampleLow,
            autoSampleHigh: this.autoSampleHigh,
            autoSpecimenLow: this.autoSpecimenLow,
            autoSpecimenHigh: this.autoSpecimenHigh,
            teleopSampleNet: this.teleopSampleNet,
            teleopSampleLow: this.teleopSampleLow,
            teleopSampleHigh: this.teleopSampleHigh,
            teleopSpecimenLow: this.teleopSpecimenLow,
            teleopSpecimenHigh: this.teleopSpecimenHigh,
            robot1Teleop: this.robot1Teleop,
            robot2Teleop: this.robot2Teleop,
            minorFouls: this.minorFouls,
            majorFouls: this.majorFouls,
            autoSamplePoints: this.autoSamplePoints,
            autoSpecimenPoints: this.autoSpecimenPoints,
            teleopSamplePoints: this.teleopSamplePoints,
            teleopSpecimenPoints: this.teleopSpecimenPoints,
            teleopParkPoints: this.teleopParkPoints,
            teleopAscentPoints: this.teleopAscentPoints,
            autoPoints: this.autoPoints,
            teleopPoints: this.teleopPoints,
            endGamePoints: this.endGamePoints,
            foulPointsCommitted: this.foulPointsCommitted,
            preFoulTotal: this.preFoulTotal,
            totalPoints: this.totalPoints,
        };
    }

    fromJSON(json: any): AllianceDetails2425 {
        this.team = json.team;
        this.robot1Auto = json.robot1Auto;
        this.robot2Auto = json.robot2Auto;
        this.autoSampleNet = json.autoSampleNet;
        this.autoSampleLow = json.autoSampleLow;
        this.autoSampleHigh = json.autoSampleHigh;
        this.autoSpecimenLow = json.autoSpecimenLow;
        this.autoSpecimenHigh = json.autoSpecimenHigh;
        this.teleopSampleNet = json.teleopSampleNet;
        this.teleopSampleLow = json.teleopSampleLow;
        this.teleopSampleHigh = json.teleopSampleHigh;
        this.teleopSpecimenLow = json.teleopSpecimenLow;
        this.teleopSpecimenHigh = json.teleopSpecimenHigh;
        this.robot1Teleop = json.robot1Teleop;
        this.robot2Teleop = json.robot2Teleop;
        this.minorFouls = json.minorFouls;
        this.majorFouls = json.majorFouls;
        this.autoSamplePoints = json.autoSamplePoints;
        this.autoSpecimenPoints = json.autoSpecimenPoints;
        this.teleopSamplePoints = json.teleopSamplePoints;
        this.teleopSpecimenPoints = json.teleopSpecimenPoints;
        this.teleopParkPoints = json.teleopParkPoints;
        this.teleopAscentPoints = json.teleopAscentPoints;
        this.autoPoints = json.autoPoints;
        this.teleopPoints = json.teleopPoints;
        this.endGamePoints = json.endGamePoints;
        this.foulPointsCommitted = json.foulPointsCommitted;
        this.preFoulTotal = json.preFoulTotal;
        this.totalPoints = json.totalPoints;
        return this;
    }

    get team(): number {
        return this._team;
    }
    set team(value: number) {
        this._team = value;
    }

    get robot1Auto(): 'NONE' | 'OBSERVATION_ZONE' | 'ASCENT' {
        return this._robot1Auto;
    }
    set robot1Auto(value: 'NONE' | 'OBSERVATION_ZONE' | 'ASCENT') {
        this._robot1Auto = value;
    }

    get robot2Auto(): 'NONE' | 'OBSERVATION_ZONE' | 'ASCENT' {
        return this._robot2Auto;
    }
    set robot2Auto(value: 'NONE' | 'OBSERVATION_ZONE' | 'ASCENT') {
        this._robot2Auto = value;
    }

    get autoSampleNet(): number {
        return this._autoSampleNet;
    }
    set autoSampleNet(value: number) {
        this._autoSampleNet = value;
    }

    get autoSampleLow(): number {
        return this._autoSampleLow;
    }
    set autoSampleLow(value: number) {
        this._autoSampleLow = value;
    }

    get autoSampleHigh(): number {
        return this._autoSampleHigh;
    }
    set autoSampleHigh(value: number) {
        this._autoSampleHigh = value;
    }

    get autoSpecimenLow(): number {
        return this._autoSpecimenLow;
    }
    set autoSpecimenLow(value: number) {
        this._autoSpecimenLow = value;
    }

    get autoSpecimenHigh(): number {
        return this._autoSpecimenHigh;
    }
    set autoSpecimenHigh(value: number) {
        this._autoSpecimenHigh = value;
    }

    get teleopSampleNet(): number {
        return this._teleopSampleNet;
    }
    set teleopSampleNet(value: number) {
        this._teleopSampleNet = value;
    }

    get teleopSampleLow(): number {
        return this._teleopSampleLow;
    }
    set teleopSampleLow(value: number) {
        this._teleopSampleLow = value;
    }

    get teleopSampleHigh(): number {
        return this._teleopSampleHigh;
    }
    set teleopSampleHigh(value: number) {
        this._teleopSampleHigh = value;
    }

    get teleopSpecimenLow(): number {
        return this._teleopSpecimenLow;
    }
    set teleopSpecimenLow(value: number) {
        this._teleopSpecimenLow = value;
    }

    get teleopSpecimenHigh(): number {
        return this._teleopSpecimenHigh;
    }
    set teleopSpecimenHigh(value: number) {
        this._teleopSpecimenHigh = value;
    }

    get robot1Teleop(): 'NONE' | 'OBSERVATION_ZONE' | 'ASCENT_1' | 'ASCENT_2' | 'ASCENT_3' {
        return this._robot1Teleop;
    }
    set robot1Teleop(value: 'NONE' | 'OBSERVATION_ZONE' | 'ASCENT_1' | 'ASCENT_2' | 'ASCENT_3') {
        this._robot1Teleop = value;
    }

    get robot2Teleop(): 'NONE' | 'OBSERVATION_ZONE' | 'ASCENT_1' | 'ASCENT_2' | 'ASCENT_3' {
        return this._robot2Teleop;
    }
    set robot2Teleop(value: 'NONE' | 'OBSERVATION_ZONE' | 'ASCENT_1' | 'ASCENT_2' | 'ASCENT_3') {
        this._robot2Teleop = value;
    }

    get minorFouls(): number {
        return this._minorFouls;
    }
    set minorFouls(value: number) {
        this._minorFouls = value;
    }

    get majorFouls(): number {
        return this._majorFouls;
    }
    set majorFouls(value: number) {
        this._majorFouls = value;
    }

    get autoSamplePoints(): number {
        return this._autoSamplePoints;
    }
    set autoSamplePoints(value: number) {
        this._autoSamplePoints = value;
    }

    get autoSpecimenPoints(): number {
        return this._autoSpecimenPoints;
    }
    set autoSpecimenPoints(value: number) {
        this._autoSpecimenPoints = value;
    }

    get teleopSamplePoints(): number {
        return this._teleopSamplePoints;
    }
    set teleopSamplePoints(value: number) {
        this._teleopSamplePoints = value;
    }

    get teleopSpecimenPoints(): number {
        return this._teleopSpecimenPoints;
    }
    set teleopSpecimenPoints(value: number) {
        this._teleopSpecimenPoints = value;
    }

    get teleopParkPoints(): number {
        return this._teleopParkPoints;
    }
    set teleopParkPoints(value: number) {
        this._teleopParkPoints = value;
    }

    get teleopAscentPoints(): number {
        return this._teleopAscentPoints;
    }
    set teleopAscentPoints(value: number) {
        this._teleopAscentPoints = value;
    }

    get autoPoints(): number {
        return this._autoPoints;
    }
    set autoPoints(value: number) {
        this._autoPoints = value;
    }

    get teleopPoints(): number {
        return this._teleopPoints;
    }
    set teleopPoints(value: number) {
        this._teleopPoints = value;
    }

    get endGamePoints(): number {
        return this._endGamePoints;
    }
    set endGamePoints(value: number) {
        this._endGamePoints = value;
    }

    get foulPointsCommitted(): number {
        return this._foulPointsCommitted;
    }
    set foulPointsCommitted(value: number) {
        this._foulPointsCommitted = value;
    }

    get preFoulTotal(): number {
        return this._preFoulTotal;
    }
    set preFoulTotal(value: number) {
        this._preFoulTotal = value;
    }

    get totalPoints(): number {
        return this._totalPoints;
    }
    set totalPoints(value: number) {
        this._totalPoints = value;
    }
}
