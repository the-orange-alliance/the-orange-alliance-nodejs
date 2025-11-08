import { ISerializable } from "../../ISerializable";

export default class AllianceDetails2526 implements ISerializable {
    private _alliance: 'Blue' | 'Red' | string;
    private _team: number;

    private _autoClassifiedArtifacts: number;
    private _autoOverflowArtifacts: number;
    private _autoClassifierState: ('NONE' | 'PURPLE' | 'GREEN')[];
    private _robot1Auto: boolean;
    private _robot2Auto: boolean;
    private _autoLeavePoints: number;
    private _autoArtifactPoints: number;
    private _autoPatternPoints: number;

    private _teleopClassifiedArtifacts: number;
    private _teleopOverflowArtifacts: number;
    private _teleopDepotArtifacts: number;
    private _teleopClassifierState: ('NONE' | 'PURPLE' | 'GREEN')[];
    private _robot1Teleop: 'NONE' | 'PARTIAL' | 'FULL';
    private _robot2Teleop: 'NONE' | 'PARTIAL' | 'FULL';
    private _teleopArtifactPoints: number;
    private _teleopDepotPoints: number;
    private _teleopPatternPoints: number;
    private _teleopBasePoints: number;

    private _autoPoints: number;
    private _teleopPoints: number;

    private _foulPointsCommitted: number;
    private _preFoulTotal: number;

    private _movementRP: boolean;
    private _goalRP: boolean;
    private _patternRP: boolean;

    private _totalPoints: number;
    private _majorFouls: number;
    private _minorFouls: number;

    constructor() {
        this._alliance = '';
        this._team = 0;

        this._autoClassifiedArtifacts = 0;
        this._autoOverflowArtifacts = 0;
        this._autoClassifierState = [];
        this._robot1Auto = false;
        this._robot2Auto = false;
        this._autoLeavePoints = 0;
        this._autoArtifactPoints = 0;
        this._autoPatternPoints = 0;

        this._teleopClassifiedArtifacts = 0;
        this._teleopOverflowArtifacts = 0;
        this._teleopDepotArtifacts = 0;
        this._teleopClassifierState = [];
        this._robot1Teleop = 'NONE';
        this._robot2Teleop = 'NONE';
        this._teleopArtifactPoints = 0;
        this._teleopDepotPoints = 0;
        this._teleopPatternPoints = 0;
        this._teleopBasePoints = 0;

        this._autoPoints = 0;
        this._teleopPoints = 0;

        this._foulPointsCommitted = 0;
        this._preFoulTotal = 0;

        this._movementRP = false;
        this._goalRP = false;
        this._patternRP = false;

        this._totalPoints = 0;
        this._majorFouls = 0;
        this._minorFouls = 0;
    }

    toJSON() {
        return {
            alliance: this.alliance,
            team: this.team,

            autoClassifiedArtifacts: this.autoClassifiedArtifacts,
            autoOverflowArtifacts: this.autoOverflowArtifacts,
            autoClassifierState: this.autoClassifierState,
            robot1Auto: this.robot1Auto,
            robot2Auto: this.robot2Auto,
            autoLeavePoints: this.autoLeavePoints,
            autoArtifactPoints: this.autoArtifactPoints,
            autoPatternPoints: this.autoPatternPoints,

            teleopClassifiedArtifacts: this.teleopClassifiedArtifacts,
            teleopOverflowArtifacts: this.teleopOverflowArtifacts,
            teleopDepotArtifacts: this.teleopDepotArtifacts,
            teleopClassifierState: this.teleopClassifierState,
            robot1Teleop: this.robot1Teleop,
            robot2Teleop: this.robot2Teleop,
            teleopArtifactPoints: this.teleopArtifactPoints,
            teleopDepotPoints: this.teleopDepotPoints,
            teleopPatternPoints: this.teleopPatternPoints,
            teleopBasePoints: this.teleopBasePoints,

            autoPoints: this.autoPoints,
            teleopPoints: this.teleopPoints,

            foulPointsCommitted: this.foulPointsCommitted,
            preFoulTotal: this.preFoulTotal,

            movementRP: this.movementRP,
            goalRP: this.goalRP,
            patternRP: this.patternRP,

            totalPoints: this.totalPoints,
            majorFouls: this.majorFouls,
            minorFouls: this.minorFouls,
        };
    }

    fromJSON(json: any): AllianceDetails2526 {
        this.alliance = json.alliance;
        this.team = json.team;

        this.autoClassifiedArtifacts = json.autoClassifiedArtifacts;
        this.autoOverflowArtifacts = json.autoOverflowArtifacts;
        this.autoClassifierState = json.autoClassifierState || [];
        this.robot1Auto = json.robot1Auto;
        this.robot2Auto = json.robot2Auto;
        this.autoLeavePoints = json.autoLeavePoints;
        this.autoArtifactPoints = json.autoArtifactPoints;
        this.autoPatternPoints = json.autoPatternPoints;

        this.teleopClassifiedArtifacts = json.teleopClassifiedArtifacts;
        this.teleopOverflowArtifacts = json.teleopOverflowArtifacts;
        this.teleopDepotArtifacts = json.teleopDepotArtifacts;
        this.teleopClassifierState = json.teleopClassifierState || [];
        this.robot1Teleop = json.robot1Teleop;
        this.robot2Teleop = json.robot2Teleop;
        this.teleopArtifactPoints = json.teleopArtifactPoints;
        this.teleopDepotPoints = json.teleopDepotPoints;
        this.teleopPatternPoints = json.teleopPatternPoints;
        this.teleopBasePoints = json.teleopBasePoints;

        this.autoPoints = json.autoPoints;
        this.teleopPoints = json.teleopPoints;

        this.foulPointsCommitted = json.foulPointsCommitted;
        this.preFoulTotal = json.preFoulTotal;

        this.movementRP = !!json.movementRP;
        this.goalRP = !!json.goalRP;
        this.patternRP = !!json.patternRP;

        this.totalPoints = json.totalPoints;
        this.majorFouls = json.majorFouls;
        this.minorFouls = json.minorFouls;

        return this;
    }

    get alliance(): 'Blue' | 'Red' | string {
        return this._alliance;
    }
    set alliance(value: 'Blue' | 'Red' | string) {
        this._alliance = value;
    }

    get team(): number {
        return this._team;
    }
    set team(value: number) {
        this._team = value;
    }

    get autoClassifiedArtifacts(): number { return this._autoClassifiedArtifacts; }
    set autoClassifiedArtifacts(v: number) { this._autoClassifiedArtifacts = v; }

    get autoOverflowArtifacts(): number { return this._autoOverflowArtifacts; }
    set autoOverflowArtifacts(v: number) { this._autoOverflowArtifacts = v; }

    get autoClassifierState(): ('NONE' | 'PURPLE' | 'GREEN')[] { return this._autoClassifierState; }
    set autoClassifierState(v: ('NONE' | 'PURPLE' | 'GREEN')[]) { this._autoClassifierState = v; }

    get robot1Auto(): boolean { return this._robot1Auto; }
    set robot1Auto(v: boolean) { this._robot1Auto = v; }

    get robot2Auto(): boolean { return this._robot2Auto; }
    set robot2Auto(v: boolean) { this._robot2Auto = v; }

    get autoLeavePoints(): number { return this._autoLeavePoints; }
    set autoLeavePoints(v: number) { this._autoLeavePoints = v; }

    get autoArtifactPoints(): number { return this._autoArtifactPoints; }
    set autoArtifactPoints(v: number) { this._autoArtifactPoints = v; }

    get autoPatternPoints(): number { return this._autoPatternPoints; }
    set autoPatternPoints(v: number) { this._autoPatternPoints = v; }

    get teleopClassifiedArtifacts(): number { return this._teleopClassifiedArtifacts; }
    set teleopClassifiedArtifacts(v: number) { this._teleopClassifiedArtifacts = v; }

    get teleopOverflowArtifacts(): number { return this._teleopOverflowArtifacts; }
    set teleopOverflowArtifacts(v: number) { this._teleopOverflowArtifacts = v; }

    get teleopDepotArtifacts(): number { return this._teleopDepotArtifacts; }
    set teleopDepotArtifacts(v: number) { this._teleopDepotArtifacts = v; }

    get teleopClassifierState(): ('NONE' | 'PURPLE' | 'GREEN')[] { return this._teleopClassifierState; }
    set teleopClassifierState(v: ('NONE' | 'PURPLE' | 'GREEN')[]) { this._teleopClassifierState = v; }

    get robot1Teleop(): 'NONE' | 'PARTIAL' | 'FULL' { return this._robot1Teleop; }
    set robot1Teleop(v: 'NONE' | 'PARTIAL' | 'FULL') { this._robot1Teleop = v; }

    get robot2Teleop(): 'NONE' | 'PARTIAL' | 'FULL' { return this._robot2Teleop; }
    set robot2Teleop(v: 'NONE' | 'PARTIAL' | 'FULL') { this._robot2Teleop = v; }

    get teleopArtifactPoints(): number { return this._teleopArtifactPoints; }
    set teleopArtifactPoints(v: number) { this._teleopArtifactPoints = v; }

    get teleopDepotPoints(): number { return this._teleopDepotPoints; }
    set teleopDepotPoints(v: number) { this._teleopDepotPoints = v; }

    get teleopPatternPoints(): number { return this._teleopPatternPoints; }
    set teleopPatternPoints(v: number) { this._teleopPatternPoints = v; }

    get teleopBasePoints(): number { return this._teleopBasePoints; }
    set teleopBasePoints(v: number) { this._teleopBasePoints = v; }

    get autoPoints(): number { return this._autoPoints; }
    set autoPoints(v: number) { this._autoPoints = v; }

    get teleopPoints(): number { return this._teleopPoints; }
    set teleopPoints(v: number) { this._teleopPoints = v; }

    get foulPointsCommitted(): number { return this._foulPointsCommitted; }
    set foulPointsCommitted(v: number) { this._foulPointsCommitted = v; }

    get preFoulTotal(): number { return this._preFoulTotal; }
    set preFoulTotal(v: number) { this._preFoulTotal = v; }

    get movementRP(): boolean { return this._movementRP; }
    set movementRP(v: boolean) { this._movementRP = v; }

    get goalRP(): boolean { return this._goalRP; }
    set goalRP(v: boolean) { this._goalRP = v; }

    get patternRP(): boolean { return this._patternRP; }
    set patternRP(v: boolean) { this._patternRP = v; }

    get totalPoints(): number { return this._totalPoints; }
    set totalPoints(v: number) { this._totalPoints = v; }

    get majorFouls(): number { return this._majorFouls; }
    set majorFouls(v: number) { this._majorFouls = v; }

    get minorFouls(): number { return this._minorFouls; }
    set minorFouls(v: number) { this._minorFouls = v; }
}
