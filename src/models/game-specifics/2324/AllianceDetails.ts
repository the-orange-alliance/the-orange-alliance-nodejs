import { ISerializable } from "../../ISerializable";

export default class CenterstageAllianceDetails implements ISerializable {
  private _init_team_prop_1: boolean = false;
  private _init_team_prop_2: boolean = false;
  private _spike_mark_pixel_1: boolean = false;
  private _spike_mark_pixel_2: boolean = false;
  private _target_backdrop_pixel_1: boolean = false;
  private _target_backdrop_pixel_2: boolean = false;
  private _auto_robot_1: boolean = false;
  private _auto_robot_2: boolean = false;
  private _auto_backdrop: number = 0;
  private _auto_backstage: number = 0;
  private _tele_backdrop: number = 0;
  private _tele_studio: number = 0;
  private _drone_1: number = 0;
  private _drone_2: number = 0;
  private _end_robot_1: string = '';
  private _end_robot_2: string = '';
  private _mosaics: number = 0;
  private _max_set_line: number = 0;
  private _auto_navigating_points: number = 0;
  private _auto_randomization_points: number = 0;
  private _auto_backstage_points: number = 0;
  private _auto_backdrop_points: number = 0;
  private _tele_backdrop_points: number = 0;
  private _tele_backstage_points: number = 0;
  private _mosaic_points: number = 0;
  private _set_bonus_points: number = 0;
  private _end_location_points: number = 0;
  private _end_drone_points: number = 0;
  private _team: number = 0;
  private _auto_points: number = 0;
  private _tele_points: number = 0;
  private _end_points: number = 0;
  private _penalty_points_committed: number = 0;
  private _pre_penalty_total_points: number = 0;
  private _total_points: number = 0;

  toJSON(): any {
    return {
      init_team_prop_1: this.init_team_prop_1,
      init_team_prop_2: this.init_team_prop_2,
      spike_mark_pixel_1: this.spike_mark_pixel_1,
      spike_mark_pixel_2: this.spike_mark_pixel_2,
      target_backdrop_pixel_1: this.target_backdrop_pixel_1,
      target_backdrop_pixel_2: this.target_backdrop_pixel_2,
      auto_robot_1: this.auto_robot_1,
      auto_robot_2: this.auto_robot_2,
      auto_backdrop: this.auto_backdrop,
      auto_backstage: this.auto_backstage,
      tele_backdrop: this.tele_backdrop,
      tele_studio: this.tele_studio,
      drone_1: this.drone_1,
      drone_2: this.drone_2,
      end_robot_1: this.end_robot_1,
      end_robot_2: this.end_robot_2,
      mosaics: this.mosaics,
      max_set_line: this.max_set_line,
      auto_navigating_points: this.auto_navigating_points,
      auto_randomization_points: this.auto_randomization_points,
      auto_backstage_points: this.auto_backstage_points,
      auto_backdrop_points: this.auto_backdrop_points,
      tele_backdrop_points: this.tele_backdrop_points,
      tele_backstage_points: this.tele_backstage_points,
      mosaic_points: this.mosaic_points,
      set_bonus_points: this.set_bonus_points,
      end_location_points: this.end_location_points,
      end_drone_points: this.end_drone_points,
      team: this.team,
      auto_points: this.auto_points,
      tele_points: this.tele_points,
      end_points: this.end_points,
      penalty_points_committed: this.penalty_points_committed,
      pre_penalty_total_points: this.pre_penalty_total_points,
      total_points: this.total_points,
    };
  }

  fromJSON(json: any): CenterstageAllianceDetails {
    this.init_team_prop_1 = json.init_team_prop_1;
    this.init_team_prop_2 = json.init_team_prop_2;
    this.spike_mark_pixel_1 = json.spike_mark_pixel_1;
    this.spike_mark_pixel_2 = json.spike_mark_pixel_2;
    this.target_backdrop_pixel_1 = json.target_backdrop_pixel_1;
    this.target_backdrop_pixel_2 = json.target_backdrop_pixel_2;
    this.auto_robot_1 = json.auto_robot_1;
    this.auto_robot_2 = json.auto_robot_2;
    this.auto_backdrop = json.auto_backdrop;
    this.auto_backstage = json.auto_backstage;
    this.tele_backdrop = json.tele_backdrop;
    this.tele_studio = json.tele_studio;
    this.drone_1 = json.drone_1;
    this.drone_2 = json.drone_2;
    this.end_robot_1 = json.end_robot_1;
    this.end_robot_2 = json.end_robot_2;
    this.mosaics = json.mosaics;
    this.max_set_line = json.max_set_line;
    this.auto_navigating_points = json.auto_navigating_points;
    this.auto_randomization_points = json.auto_randomization_points;
    this.auto_backstage_points = json.auto_backstage_points;
    this.auto_backdrop_points = json.auto_backdrop_points;
    this.tele_backdrop_points = json.tele_backdrop_points;
    this.tele_backstage_points = json.tele_backstage_points;
    this.mosaic_points = json.mosaic_points;
    this.set_bonus_points = json.set_bonus_points;
    this.end_location_points = json.end_location_points;
    this.end_drone_points = json.end_drone_points;
    this.team = json.team;
    this.auto_points = json.auto_points;
    this.tele_points = json.tele_points;
    this.end_points = json.end_points;
    this.penalty_points_committed = json.penalty_points_committed;
    this.pre_penalty_total_points = json.pre_penalty_total_points;
    this.total_points = json.total_points;

    return this;
  }

  /**
   * Getter init_team_prop_1
   * @return {boolean }
   */
  public get init_team_prop_1(): boolean {
    return this._init_team_prop_1;
  }

  /**
   * Getter init_team_prop_2
   * @return {boolean }
   */
  public get init_team_prop_2(): boolean {
    return this._init_team_prop_2;
  }

  /**
   * Getter spike_mark_pixel_1
   * @return {boolean }
   */
  public get spike_mark_pixel_1(): boolean {
    return this._spike_mark_pixel_1;
  }

  /**
   * Getter spike_mark_pixel_2
   * @return {boolean }
   */
  public get spike_mark_pixel_2(): boolean {
    return this._spike_mark_pixel_2;
  }

  /**
   * Getter target_backdrop_pixel_1
   * @return {boolean }
   */
  public get target_backdrop_pixel_1(): boolean {
    return this._target_backdrop_pixel_1;
  }

  /**
   * Getter target_backdrop_pixel_2
   * @return {boolean }
   */
  public get target_backdrop_pixel_2(): boolean {
    return this._target_backdrop_pixel_2;
  }

  /**
   * Getter auto_robot_1
   * @return {boolean }
   */
  public get auto_robot_1(): boolean {
    return this._auto_robot_1;
  }

  /**
   * Getter auto_robot_2
   * @return {boolean }
   */
  public get auto_robot_2(): boolean {
    return this._auto_robot_2;
  }

  /**
   * Getter auto_backdrop
   * @return {number }
   */
  public get auto_backdrop(): number {
    return this._auto_backdrop;
  }

  /**
   * Getter auto_backstage
   * @return {number }
   */
  public get auto_backstage(): number {
    return this._auto_backstage;
  }

  /**
   * Getter tele_backdrop
   * @return {number }
   */
  public get tele_backdrop(): number {
    return this._tele_backdrop;
  }

  /**
   * Getter tele_studio
   * @return {number }
   */
  public get tele_studio(): number {
    return this._tele_studio;
  }

  /**
   * Getter drone_1
   * @return {number }
   */
  public get drone_1(): number {
    return this._drone_1;
  }

  /**
   * Getter drone_2
   * @return {number }
   */
  public get drone_2(): number {
    return this._drone_2;
  }

  /**
   * Getter end_robot_1
   * @return {string }
   */
  public get end_robot_1(): string {
    return this._end_robot_1;
  }

  /**
   * Getter end_robot_2
   * @return {string }
   */
  public get end_robot_2(): string {
    return this._end_robot_2;
  }

  /**
   * Getter mosaics
   * @return {number }
   */
  public get mosaics(): number {
    return this._mosaics;
  }

  /**
   * Getter max_set_line
   * @return {number }
   */
  public get max_set_line(): number {
    return this._max_set_line;
  }

  /**
   * Getter auto_navigating_points
   * @return {number }
   */
  public get auto_navigating_points(): number {
    return this._auto_navigating_points;
  }

  /**
   * Getter auto_randomization_points
   * @return {number }
   */
  public get auto_randomization_points(): number {
    return this._auto_randomization_points;
  }

  /**
   * Getter auto_backstage_points
   * @return {number }
   */
  public get auto_backstage_points(): number {
    return this._auto_backstage_points;
  }

  /**
   * Getter auto_backdrop_points
   * @return {number }
   */
  public get auto_backdrop_points(): number {
    return this._auto_backdrop_points;
  }

  /**
   * Getter tele_backdrop_points
   * @return {number }
   */
  public get tele_backdrop_points(): number {
    return this._tele_backdrop_points;
  }

  /**
   * Getter tele_backstage_points
   * @return {number }
   */
  public get tele_backstage_points(): number {
    return this._tele_backstage_points;
  }

  /**
   * Getter mosaic_points
   * @return {number }
   */
  public get mosaic_points(): number {
    return this._mosaic_points;
  }

  /**
   * Getter set_bonus_points
   * @return {number }
   */
  public get set_bonus_points(): number {
    return this._set_bonus_points;
  }

  /**
   * Getter end_location_points
   * @return {number }
   */
  public get end_location_points(): number {
    return this._end_location_points;
  }

  /**
   * Getter end_drone_points
   * @return {number }
   */
  public get end_drone_points(): number {
    return this._end_drone_points;
  }

  /**
   * Getter team
   * @return {number }
   */
  public get team(): number {
    return this._team;
  }

  /**
   * Getter auto_points
   * @return {number }
   */
  public get auto_points(): number {
    return this._auto_points;
  }

  /**
   * Getter tele_points
   * @return {number }
   */
  public get tele_points(): number {
    return this._tele_points;
  }

  /**
   * Getter end_points
   * @return {number }
   */
  public get end_points(): number {
    return this._end_points;
  }

  /**
   * Getter penalty_points_committed
   * @return {number }
   */
  public get penalty_points_committed(): number {
    return this._penalty_points_committed;
  }

  /**
   * Getter pre_penalty_total_points
   * @return {number }
   */
  public get pre_penalty_total_points(): number {
    return this._pre_penalty_total_points;
  }

  /**
   * Getter total_points
   * @return {number }
   */
  public get total_points(): number {
    return this._total_points;
  }

  /**
   * Setter init_team_prop_1
   * @param {boolean } value
   */
  public set init_team_prop_1(value: boolean) {
    this._init_team_prop_1 = value;
  }

  /**
   * Setter init_team_prop_2
   * @param {boolean } value
   */
  public set init_team_prop_2(value: boolean) {
    this._init_team_prop_2 = value;
  }

  /**
   * Setter spike_mark_pixel_1
   * @param {boolean } value
   */
  public set spike_mark_pixel_1(value: boolean) {
    this._spike_mark_pixel_1 = value;
  }

  /**
   * Setter spike_mark_pixel_2
   * @param {boolean } value
   */
  public set spike_mark_pixel_2(value: boolean) {
    this._spike_mark_pixel_2 = value;
  }

  /**
   * Setter target_backdrop_pixel_1
   * @param {boolean } value
   */
  public set target_backdrop_pixel_1(value: boolean) {
    this._target_backdrop_pixel_1 = value;
  }

  /**
   * Setter target_backdrop_pixel_2
   * @param {boolean } value
   */
  public set target_backdrop_pixel_2(value: boolean) {
    this._target_backdrop_pixel_2 = value;
  }

  /**
   * Setter auto_robot_1
   * @param {boolean } value
   */
  public set auto_robot_1(value: boolean) {
    this._auto_robot_1 = value;
  }

  /**
   * Setter auto_robot_2
   * @param {boolean } value
   */
  public set auto_robot_2(value: boolean) {
    this._auto_robot_2 = value;
  }

  /**
   * Setter auto_backdrop
   * @param {number } value
   */
  public set auto_backdrop(value: number) {
    this._auto_backdrop = value;
  }

  /**
   * Setter auto_backstage
   * @param {number } value
   */
  public set auto_backstage(value: number) {
    this._auto_backstage = value;
  }

  /**
   * Setter tele_backdrop
   * @param {number } value
   */
  public set tele_backdrop(value: number) {
    this._tele_backdrop = value;
  }

  /**
   * Setter tele_studio
   * @param {number } value
   */
  public set tele_studio(value: number) {
    this._tele_studio = value;
  }

  /**
   * Setter drone_1
   * @param {number } value
   */
  public set drone_1(value: number) {
    this._drone_1 = value;
  }

  /**
   * Setter drone_2
   * @param {number } value
   */
  public set drone_2(value: number) {
    this._drone_2 = value;
  }

  /**
   * Setter end_robot_1
   * @param {string } value
   */
  public set end_robot_1(value: string) {
    this._end_robot_1 = value;
  }

  /**
   * Setter end_robot_2
   * @param {string } value
   */
  public set end_robot_2(value: string) {
    this._end_robot_2 = value;
  }

  /**
   * Setter mosaics
   * @param {number } value
   */
  public set mosaics(value: number) {
    this._mosaics = value;
  }

  /**
   * Setter max_set_line
   * @param {number } value
   */
  public set max_set_line(value: number) {
    this._max_set_line = value;
  }

  /**
   * Setter auto_navigating_points
   * @param {number } value
   */
  public set auto_navigating_points(value: number) {
    this._auto_navigating_points = value;
  }

  /**
   * Setter auto_randomization_points
   * @param {number } value
   */
  public set auto_randomization_points(value: number) {
    this._auto_randomization_points = value;
  }

  /**
   * Setter auto_backstage_points
   * @param {number } value
   */
  public set auto_backstage_points(value: number) {
    this._auto_backstage_points = value;
  }

  /**
   * Setter auto_backdrop_points
   * @param {number } value
   */
  public set auto_backdrop_points(value: number) {
    this._auto_backdrop_points = value;
  }

  /**
   * Setter tele_backdrop_points
   * @param {number } value
   */
  public set tele_backdrop_points(value: number) {
    this._tele_backdrop_points = value;
  }

  /**
   * Setter tele_backstage_points
   * @param {number } value
   */
  public set tele_backstage_points(value: number) {
    this._tele_backstage_points = value;
  }

  /**
   * Setter mosaic_points
   * @param {number } value
   */
  public set mosaic_points(value: number) {
    this._mosaic_points = value;
  }

  /**
   * Setter set_bonus_points
   * @param {number } value
   */
  public set set_bonus_points(value: number) {
    this._set_bonus_points = value;
  }

  /**
   * Setter end_location_points
   * @param {number } value
   */
  public set end_location_points(value: number) {
    this._end_location_points = value;
  }

  /**
   * Setter end_drone_points
   * @param {number } value
   */
  public set end_drone_points(value: number) {
    this._end_drone_points = value;
  }

  /**
   * Setter team
   * @param {number } value
   */
  public set team(value: number) {
    this._team = value;
  }

  /**
   * Setter auto_points
   * @param {number } value
   */
  public set auto_points(value: number) {
    this._auto_points = value;
  }

  /**
   * Setter tele_points
   * @param {number } value
   */
  public set tele_points(value: number) {
    this._tele_points = value;
  }

  /**
   * Setter end_points
   * @param {number } value
   */
  public set end_points(value: number) {
    this._end_points = value;
  }

  /**
   * Setter penalty_points_committed
   * @param {number } value
   */
  public set penalty_points_committed(value: number) {
    this._penalty_points_committed = value;
  }

  /**
   * Setter pre_penalty_total_points
   * @param {number } value
   */
  public set pre_penalty_total_points(value: number) {
    this._pre_penalty_total_points = value;
  }

  /**
   * Setter total_points
   * @param {number } value
   */
  public set total_points(value: number) {
    this._total_points = value;
  }



}
