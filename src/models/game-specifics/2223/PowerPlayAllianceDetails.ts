import {ISerializable} from "../../ISerializable";

type Junction = string[];
type JunctionRow = Junction[];

export default class PowerPlayAllianceDetails implements ISerializable {
  // Auto
  private _initSignalSleeve1: boolean;
  private _initSignalSleve2: boolean;
  private _signalBonusPoints: number;
  private _autoRobot1: string;
  private _autoRobot2: string;
  private _autoNavPoints: number;
  private _autoTerminal: number;
  private _autoTerminalConePoints: number;
  private _autoJunctions: JunctionRow[];
  private _autoJunctionCones: number[];
  private _autoJunctionConePoints: number;

  private _teleJunctions: JunctionRow[];
  private _teleJunctionCones: number[];
  private _teleJunctionConePoints: number;
  private _teleTerminalNear: number;
  private _teleTerminalFar: number;
  private _teleTerminalOther: number;
  private _teleTerminalConePoints: number;
  private _endNavigated1: boolean;
  private _endNavigated2: boolean;
  private _endNavPoints: number;

  private _ownedJunctions: number;
  private _beacons: number;
  private _ownershipPoints: number;
  private _circuitExists: boolean
  private _circuitPoints: number;

  private _sideOfField: string;
  private _team: number;

  private _autoPoints: number;
  private _telePoints: number;
  private _endPoints: number;
  private _penaltyPointsComitted: number;
  private _prePenaltyTotalPoints: number;
  private _totalPoints: number;

  constructor() {
    this._initSignalSleeve1 = false;
    this._initSignalSleve2 = false;
    this._signalBonusPoints = -1;
    this._autoRobot1 = "";
    this._autoRobot2 = "";
    this._autoNavPoints = -1;
    this._autoTerminal = -1;
    this._autoTerminalConePoints = -1;
    this._autoJunctions = [];
    this._autoJunctionCones = [];
    this._autoJunctionConePoints = -1;
    this._teleJunctions = [];
    this._teleJunctionCones = [];
    this._teleJunctionConePoints = -1;
    this._teleTerminalNear = -1;
    this._teleTerminalFar = -1;
    this._teleTerminalOther = -1;
    this._teleTerminalConePoints = -1;
    this._endNavigated1 = false;
    this._endNavigated2 = false;
    this._endNavPoints = -1;
    this._ownedJunctions = -1;
    this._beacons = -1;
    this._ownershipPoints = -1;
    this._circuitExists = false
    this._circuitPoints = -1;
    this._sideOfField = "";
    this._team = -1;
    this._autoPoints = -1;
    this._telePoints = -1;
    this._endPoints = -1;
    this._penaltyPointsComitted = -1;
    this._prePenaltyTotalPoints = -1;
    this._totalPoints = -1;
  }

  toJSON(): object {
    return {
      init_signal_sleeve_1: this.initSignalSleeve1,
      init_signal_sleeve_2: this.initSignalSleve2,
      signal_bonus_points: this.signalBonusPoints,
      auto_robot_1: this.autoRobot1,
      auto_robot_2: this.autoRobot2,
      auto_nav_points: this.autoNavPoints,
      auto_terminal: this.autoTerminal,
      auto_terminal_cone_points: this.autoTerminalConePoints,
      auto_junctions: this.autoJunctions,
      auto_junction_cones: this.autoJunctionCones,
      auto_junction_cone_points: this.autoJunctionConePoints,
      tele_junctions: this.teleJunctions,
      tele_junction_cones: this.teleJunctionCones,
      tele_junction_cone_points: this.teleJunctionConePoints,
      tele_terminal_near: this.teleTerminalNear,
      tele_terminal_far: this.teleTerminalFar,
      tele_terminal_other: this.teleTerminalOther,
      tele_terminal_cone_points: this.teleTerminalConePoints,
      end_navigated_1: this.endNavigated1,
      end_navigated_2: this.endNavigated2,
      end_nav_points: this.endNavPoints,
      owned_junctions: this.ownedJunctions,
      beacons: this.beacons,
      ownership_points: this.ownershipPoints,
      circuit_exists: this.circuitExists,
      circuit_points: this.circuitPoints,
      side_of_field: this.sideOfField,
      team: this.team,
      auto_points: this.autoPoints,
      tele_points: this.telePoints,
      end_points: this.endPoints,
      penalty_points_comitted: this.penaltyPointsComitted,
      pre_penalty_total_points: this.prePenaltyTotalPoints,
      total_points: this.totalPoints
    };
  }

  fromJSON(json: any): PowerPlayAllianceDetails { //FROM NORMAL JSON
    this.initSignalSleeve1 = json.init_signal_sleeve_1;
    this.initSignalSleve2 = json.init_signal_sleeve_2;
    this.signalBonusPoints = json.signal_bonus_points;
    this.autoRobot1 = json.auto_robot_1;
    this.autoRobot2 = json.auto_robot_2;
    this.autoNavPoints = json.auto_nav_points;
    this.autoTerminal = json.auto_terminal;
    this.autoTerminalConePoints = json.auto_terminal_cone_points;
    this.autoJunctions = json.auto_junctions;
    this.autoJunctionCones = json.auto_junction_cones;
    this.autoJunctionConePoints = json.auto_junction_cone_points;
    this.teleJunctions = json.tele_junctions;
    this.teleJunctionCones = json.tele_junction_cones;
    this.teleJunctionConePoints = json.tele_junction_cone_points;
    this.teleTerminalNear = json.tele_terminal_near;
    this.teleTerminalFar = json.tele_terminal_far;
    this.teleTerminalOther = json.tele_terminal_other;
    this.teleTerminalConePoints = json.tele_terminal_cone_points;
    this.endNavigated1 = json.end_navigated_1;
    this.endNavigated2 = json.end_navigated_2;
    this.endNavPoints = json.end_nav_points;
    this.ownedJunctions = json.owned_junctions;
    this.beacons = json.beacons;
    this.ownershipPoints = json.ownership_points;
    this.circuitExists = json.circuit_exists;
    this.circuitPoints = json.circuit_points;
    this.sideOfField = json.side_of_field;
    this.team = json.team;
    this.autoPoints = json.auto_points;
    this.telePoints = json.tele_points;
    this.endPoints = json.end_points;
    this.penaltyPointsComitted = json.penalty_points_comitted;
    this.prePenaltyTotalPoints = json.pre_penalty_total_points;
    this.totalPoints = json.total_points;
    return this;
  }

  get initSignalSleeve1(): boolean {
    return this._initSignalSleeve1;
  }

  set initSignalSleeve1(value: boolean) {
    this._initSignalSleeve1 = value;
  }

  get initSignalSleve2(): boolean {
    return this._initSignalSleve2;
  }

  set initSignalSleve2(value: boolean) {
    this._initSignalSleve2 = value;
  }

  get signalBonusPoints(): number {
    return this._signalBonusPoints;
  }

  set signalBonusPoints(value: number) {
    this._signalBonusPoints = value;
  }

  get autoRobot1(): string {
    return this._autoRobot1;
  }

  set autoRobot1(value: string) {
    this._autoRobot1 = value;
  }

  get autoRobot2(): string {
    return this._autoRobot2;
  }

  set autoRobot2(value: string) {
    this._autoRobot2 = value;
  }

  get autoNavPoints(): number {
    return this._autoNavPoints;
  }

  set autoNavPoints(value: number) {
    this._autoNavPoints = value;
  }

  get autoTerminal(): number {
    return this._autoTerminal;
  }

  set autoTerminal(value: number) {
    this._autoTerminal = value;
  }

  get autoTerminalConePoints(): number {
    return this._autoTerminalConePoints;
  }

  set autoTerminalConePoints(value: number) {
    this._autoTerminalConePoints = value;
  }

  get autoJunctions(): JunctionRow[] {
    return this._autoJunctions;
  }

  set autoJunctions(value: JunctionRow[]) {
    this._autoJunctions = value;
  }

  get autoJunctionCones(): number[] {
    return this._autoJunctionCones;
  }

  set autoJunctionCones(value: number[]) {
    this._autoJunctionCones = value;
  }

  get autoJunctionConePoints(): number {
    return this._autoJunctionConePoints;
  }

  set autoJunctionConePoints(value: number) {
    this._autoJunctionConePoints = value;
  }

  get teleJunctions(): JunctionRow[] {
    return this._teleJunctions;
  }

  set teleJunctions(value: JunctionRow[]) {
    this._teleJunctions = value;
  }

  get teleJunctionCones(): number[] {
    return this._teleJunctionCones;
  }

  set teleJunctionCones(value: number[]) {
    this._teleJunctionCones = value;
  }

  get teleJunctionConePoints(): number {
    return this._teleJunctionConePoints;
  }

  set teleJunctionConePoints(value: number) {
    this._teleJunctionConePoints = value;
  }

  get teleTerminalNear(): number {
    return this._teleTerminalNear;
  }

  set teleTerminalNear(value: number) {
    this._teleTerminalNear = value;
  }

  get teleTerminalFar(): number {
    return this._teleTerminalFar;
  }

  set teleTerminalFar(value: number) {
    this._teleTerminalFar = value;
  }

  get teleTerminalOther(): number {
    return this._teleTerminalOther;
  }

  set teleTerminalOther(value: number) {
    this._teleTerminalOther = value;
  }

  get teleTerminalConePoints(): number {
    return this._teleTerminalConePoints;
  }

  set teleTerminalConePoints(value: number) {
    this._teleTerminalConePoints = value;
  }

  get endNavigated1(): boolean {
    return this._endNavigated1;
  }

  set endNavigated1(value: boolean) {
    this._endNavigated1 = value;
  }

  get endNavigated2(): boolean {
    return this._endNavigated2;
  }

  set endNavigated2(value: boolean) {
    this._endNavigated2 = value;
  }

  get endNavPoints(): number {
    return this._endNavPoints;
  }

  set endNavPoints(value: number) {
    this._endNavPoints = value;
  }

  get ownedJunctions(): number {
    return this._ownedJunctions;
  }

  set ownedJunctions(value: number) {
    this._ownedJunctions = value;
  }

  get beacons(): number {
    return this._beacons;
  }

  set beacons(value: number) {
    this._beacons = value;
  }

  get ownershipPoints(): number {
    return this._ownershipPoints;
  }

  set ownershipPoints(value: number) {
    this._ownershipPoints = value;
  }

  get circuitExists(): boolean {
    return this._circuitExists;
  }

  set circuitExists(value: boolean) {
    this._circuitExists = value;
  }

  get circuitPoints(): number {
    return this._circuitPoints;
  }

  set circuitPoints(value: number) {
    this._circuitPoints = value;
  }

  get sideOfField(): string {
    return this._sideOfField;
  }

  set sideOfField(value: string) {
    this._sideOfField = value;
  }

  get team(): number {
    return this._team;
  }

  set team(value: number) {
    this._team = value;
  }

  get autoPoints(): number {
    return this._autoPoints;
  }

  set autoPoints(value: number) {
    this._autoPoints = value;
  }

  get telePoints(): number {
    return this._telePoints;
  }

  set telePoints(value: number) {
    this._telePoints = value;
  }

  get endPoints(): number {
    return this._endPoints;
  }

  set endPoints(value: number) {
    this._endPoints = value;
  }

  get penaltyPointsComitted(): number {
    return this._penaltyPointsComitted;
  }

  set penaltyPointsComitted(value: number) {
    this._penaltyPointsComitted = value;
  }

  get prePenaltyTotalPoints(): number {
    return this._prePenaltyTotalPoints;
  }

  set prePenaltyTotalPoints(value: number) {
    this._prePenaltyTotalPoints = value;
  }

  get totalPoints(): number {
    return this._totalPoints;
  }

  set totalPoints(value: number) {
    this._totalPoints = value;
  }
}
