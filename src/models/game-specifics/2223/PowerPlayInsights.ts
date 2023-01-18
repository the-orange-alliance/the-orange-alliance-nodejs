import Insights from '../../Insights';
import { ISerializable } from '../../ISerializable';
import Match from '../../Match';

export default class PowerPlayInsights extends Insights implements ISerializable {
  private _autoPercentBonuses: number;
  private _autoPercentSignalSleeves: number;
  private _autoPercentTerminalSubstation: number;
  private _autoPercentSignalZone: number;
  private _autoAverageHighJunctions: number;
  private _autoAverageMidJunctions: number;
  private _autoAverageLowJunctions: number;
  private _autoAverageGroundJunctions: number;
  private _autoAverageTerminal: number;
  private _teleAverageHighJunctions: number;
  private _teleAverageMidJunctions: number;
  private _teleAverageLowJunctions: number;
  private _teleAverageGroundJunctions: number;
  private _teleAverageTerminalNear: number;
  private _teleAverageTerminalFar: number;
  private _endPercentNavigated: number;
  private _endPercentBeacons: number;
  private _endAverageOwnedJunctions: number;
  private _endPercentCircuits: number;

  constructor() {
    super();
    this._autoPercentBonuses = 0;
    this._autoPercentSignalSleeves = 0;
    this._autoPercentTerminalSubstation = 0;
    this._autoPercentSignalZone = 0;
    this._autoAverageHighJunctions = 0;
    this._autoAverageMidJunctions = 0;
    this._autoAverageLowJunctions = 0;
    this._autoAverageGroundJunctions = 0;
    this._autoAverageTerminal = 0;
    this._teleAverageHighJunctions = 0;
    this._teleAverageMidJunctions = 0;
    this._teleAverageLowJunctions = 0;
    this._teleAverageGroundJunctions = 0;
    this._teleAverageTerminalNear = 0;
    this._teleAverageTerminalFar = 0;
    this._endPercentNavigated = 0;
    this._endPercentBeacons = 0;
    this._endAverageOwnedJunctions = 0;
    this._endPercentCircuits = 0;
  }

  toJSON(): object {
    return {
      high_score_match: this.highScoreMatch?.toJSON(),
      average_match_score: this.averageMatchScore,
      average_winning_score: this.averageWinningScore,
      average_winning_margin: this.averageWinningMargin,
      average_major_penalty: this.averageMajorPenalties,
      average_minor_penalty: this.averageMinorPenalties,
      game: {
        auto_percent_bonuses: this.autoPercentBonuses,
        auto_percent_signal_sleeves: this.autoPercentSignalSleeves,
        auto_percent_terminal_substation: this.autoPercentTerminalSubstation,
        auto_percent_signal_zone: this.autoPercentSignalZone,
        auto_average_high_junctions: this.autoAverageHighJunctions,
        auto_average_mid_junctions: this.autoAverageMidJunctions,
        auto_average_low_junctions: this.autoAverageLowJunctions,
        auto_average_ground_junctions: this.autoAverageGroundJunctions,
        auto_average_terminal: this.autoAverageTerminal,
        tele_average_high_junctions: this.teleAverageHighJunctions,
        tele_average_mid_junctions: this.teleAverageMidJunctions,
        tele_average_low_junctions: this.teleAverageLowJunctions,
        tele_average_ground_junctions: this.teleAverageGroundJunctions,
        tele_average_terminal_near: this.teleAverageTerminalNear,
        tele_average_terminal_far: this.teleAverageTerminalFar,
        end_percent_navigated: this.endPercentNavigated,
        end_percent_beacons: this.endPercentBeacons,
        end_average_owned_junctions: this.endAverageOwnedJunctions,
        end_percent_circuits: this.endPercentCircuits
      }
    }
  }

  fromJSON(json: any): PowerPlayInsights {
    this.highScoreMatch = json.high_score_match ? new Match().fromJSON(json.high_score_match) : null;
    this.averageMatchScore = json.average_match_score;
    this.averageWinningScore = json.average_winning_score;
    this.averageWinningMargin = json.average_winning_margin;
    this.averageMajorPenalties = json.average_major_penalty;
    this.averageMinorPenalties = json.average_minor_penalty;

    this.autoPercentBonuses = json.game.auto_percent_bonuses;
    this.autoPercentSignalSleeves = json.game.auto_percent_signal_sleeves;
    this.autoPercentTerminalSubstation = json.game.auto_percent_terminal_substation;
    this.autoPercentSignalZone = json.game.auto_percent_signal_zone;
    this.autoAverageHighJunctions = json.game.auto_average_high_junctions;
    this.autoAverageMidJunctions = json.game.auto_average_mid_junctions;
    this.autoAverageLowJunctions = json.game.auto_average_low_junctions;
    this.autoAverageGroundJunctions = json.game.auto_average_ground_junctions;
    this.autoAverageTerminal = json.game.auto_average_terminal;
    this.teleAverageHighJunctions = json.game.tele_average_high_junctions;
    this.teleAverageMidJunctions = json.game.tele_average_mid_junctions;
    this.teleAverageLowJunctions = json.game.tele_average_low_junctions;
    this.teleAverageGroundJunctions = json.game.tele_average_ground_junctions;
    this.teleAverageTerminalNear = json.game.tele_average_terminal_near;
    this.teleAverageTerminalFar = json.game.tele_average_terminal_far;
    this.endPercentNavigated = json.game.end_percent_navigated;
    this.endPercentBeacons = json.game.end_percent_beacons;
    this.endAverageOwnedJunctions = json.game.end_average_owned_junctions;
    this.endPercentCircuits = json.game.end_percent_circuits;

    return this;
  }

  /**
   * Getter autoPercentBonuses
   * @return {number}
   */
  get autoPercentBonuses(): number {
    return this._autoPercentBonuses;
  }

  /**
   * Getter autoPercentSignalSleeves
   * @return {number}
   */
  get autoPercentSignalSleeves(): number {
    return this._autoPercentSignalSleeves;
  }

  /**
   * Getter autoPercentTerminalSubstation
   * @return {number}
   */
  get autoPercentTerminalSubstation(): number {
    return this._autoPercentTerminalSubstation;
  }

  /**
   * Getter autoPercentSignalZone
   * @return {number}
   */
  get autoPercentSignalZone(): number {
    return this._autoPercentSignalZone;
  }

  /**
   * Getter autoAverageHighJunctions
   * @return {number}
   */
  get autoAverageHighJunctions(): number {
    return this._autoAverageHighJunctions;
  }

  /**
   * Getter autoAverageMidJunctions
   * @return {number}
   */
  get autoAverageMidJunctions(): number {
    return this._autoAverageMidJunctions;
  }

  /**
   * Getter autoAverageLowJunctions
   * @return {number}
   */
  get autoAverageLowJunctions(): number {
    return this._autoAverageLowJunctions;
  }

  /**
   * Getter autoAverageGroundJunctions
   * @return {number}
   */
  get autoAverageGroundJunctions(): number {
    return this._autoAverageGroundJunctions;
  }

  /**
   * Getter autoAverageTerminal
   * @return {number}
   */
  get autoAverageTerminal(): number {
    return this._autoAverageTerminal;
  }

  /**
   * Getter teleAverageHighJunctions
   * @return {number}
   */
  get teleAverageHighJunctions(): number {
    return this._teleAverageHighJunctions;
  }

  /**
   * Getter teleAverageMidJunctions
   * @return {number}
   */
  get teleAverageMidJunctions(): number {
    return this._teleAverageMidJunctions;
  }

  /**
   * Getter teleAverageLowJunctions
   * @return {number}
   */
  get teleAverageLowJunctions(): number {
    return this._teleAverageLowJunctions;
  }

  /**
   * Getter teleAverageGroundJunctions
   * @return {number}
   */
  get teleAverageGroundJunctions(): number {
    return this._teleAverageGroundJunctions;
  }

  /**
   * Getter teleAverageTerminalNear
   * @return {number}
   */
  get teleAverageTerminalNear(): number {
    return this._teleAverageTerminalNear;
  }

  /**
   * Getter teleAverageTerminalFar
   * @return {number}
   */
  get teleAverageTerminalFar(): number {
    return this._teleAverageTerminalFar;
  }

  /**
   * Getter endPercentNavigated
   * @return {number}
   */
  get endPercentNavigated(): number {
    return this._endPercentNavigated;
  }

  /**
   * Getter endPercentBeacons
   * @return {number}
   */
  get endPercentBeacons(): number {
    return this._endPercentBeacons;
  }

  /**
   * Getter endAverageOwnedJunctions
   * @return {number}
   */
  get endAverageOwnedJunctions(): number {
    return this._endAverageOwnedJunctions;
  }

  /**
   * Getter endPercentCircuits
   * @return {number}
   */
  get endPercentCircuits(): number {
    return this._endPercentCircuits;
  }

  /**
   * Setter autoPercentBonuses
   * @param {number} value
   */
  set autoPercentBonuses(value: number) {
    this._autoPercentBonuses = value;
  }

  /**
   * Setter autoPercentSignalSleeves
   * @param {number} value
   */
  set autoPercentSignalSleeves(value: number) {
    this._autoPercentSignalSleeves = value;
  }

  /**
   * Setter autoPercentTerminalSubstation
   * @param {number} value
   */
  set autoPercentTerminalSubstation(value: number) {
    this._autoPercentTerminalSubstation = value;
  }

  /**
   * Setter autoPercentSignalZone
   * @param {number} value
   */
  set autoPercentSignalZone(value: number) {
    this._autoPercentSignalZone = value;
  }

  /**
   * Setter autoAverageHighJunctions
   * @param {number} value
   */
  set autoAverageHighJunctions(value: number) {
    this._autoAverageHighJunctions = value;
  }

  /**
   * Setter autoAverageMidJunctions
   * @param {number} value
   */
  set autoAverageMidJunctions(value: number) {
    this._autoAverageMidJunctions = value;
  }

  /**
   * Setter autoAverageLowJunctions
   * @param {number} value
   */
  set autoAverageLowJunctions(value: number) {
    this._autoAverageLowJunctions = value;
  }

  /**
   * Setter autoAverageGroundJunctions
   * @param {number} value
   */
  set autoAverageGroundJunctions(value: number) {
    this._autoAverageGroundJunctions = value;
  }

  /**
   * Setter autoAverageTerminal
   * @param {number} value
   */
  set autoAverageTerminal(value: number) {
    this._autoAverageTerminal = value;
  }

  /**
   * Setter teleAverageHighJunctions
   * @param {number} value
   */
  set teleAverageHighJunctions(value: number) {
    this._teleAverageHighJunctions = value;
  }

  /**
   * Setter teleAverageMidJunctions
   * @param {number} value
   */
  set teleAverageMidJunctions(value: number) {
    this._teleAverageMidJunctions = value;
  }

  /**
   * Setter teleAverageLowJunctions
   * @param {number} value
   */
  set teleAverageLowJunctions(value: number) {
    this._teleAverageLowJunctions = value;
  }

  /**
   * Setter teleAverageGroundJunctions
   * @param {number} value
   */
  set teleAverageGroundJunctions(value: number) {
    this._teleAverageGroundJunctions = value;
  }

  /**
   * Setter teleAverageTerminalNear
   * @param {number} value
   */
  set teleAverageTerminalNear(value: number) {
    this._teleAverageTerminalNear = value;
  }

  /**
   * Setter teleAverageTerminalFar
   * @param {number} value
   */
  set teleAverageTerminalFar(value: number) {
    this._teleAverageTerminalFar = value;
  }

  /**
   * Setter endPercentNavigated
   * @param {number} value
   */
  set endPercentNavigated(value: number) {
    this._endPercentNavigated = value;
  }

  /**
   * Setter endPercentBeacons
   * @param {number} value
   */
  set endPercentBeacons(value: number) {
    this._endPercentBeacons = value;
  }

  /**
   * Setter endAverageOwnedJunctions
   * @param {number} value
   */
  set endAverageOwnedJunctions(value: number) {
    this._endAverageOwnedJunctions = value;
  }

  /**
   * Setter endPercentCircuits
   * @param {number} value
   */
  set endPercentCircuits(value: number) {
    this._endPercentCircuits = value;
  }

}