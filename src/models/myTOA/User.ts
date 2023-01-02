import { ISerializable } from "../ISerializable";

export default class User implements ISerializable {
    private _uid: string;
    private _email: string;
    private _emailVerified: boolean;
    private _displayName: string;
    private _photoURL: string;
    private _phoneNumber: string;
    private _disabled: boolean;
    private _metadata: {
        lastSignInTime: string;
        creationTime: string;
        lastRefreshTime: string;
    };
    private _tokensValidAfterTime: string;
    private _email_linked: boolean;
    private _google_linked: boolean;
    private _github_linked: boolean;
    private _phone_linked: boolean;
    private _api_key: string;
    private _is_dev: boolean;
    private _team: any;
    private _level: number;
    private _favorite_teams: string[];
    private _favorite_events: string[];
    private _admin_teams: string[];
    private _individual_admin_events: any[];
    private _admin_events: string[];

    constructor() {
        this._uid = '';
        this._email = '';
        this._emailVerified = false;
        this._displayName = '';
        this._photoURL = '';
        this._phoneNumber = '';
        this._disabled = false;
        this._metadata = {
            lastSignInTime: '',
            creationTime: '',
            lastRefreshTime: '',
        };
        this._tokensValidAfterTime = '';
        this._email_linked = false;
        this._google_linked = false;
        this._github_linked = false;
        this._phone_linked = false;
        this._api_key = '';
        this._is_dev = false;
        this._team = null;
        this._level = -1;
        this._favorite_teams = [];
        this._favorite_events = [];
        this._admin_teams = [];
        this._individual_admin_events = [];
        this._admin_events = [];
    }

    public fromJSON(json: any): User {
        this._uid = json.uid;
        this._email = json.email;
        this._emailVerified = json.emailVerified;
        this._displayName = json.displayName;
        this._photoURL = json.photoURL;
        this._phoneNumber = json.phoneNumber;
        this._disabled = json.disabled;
        this._metadata = json.metadata;
        this._tokensValidAfterTime = json.tokensValidAfterTime;
        this._email_linked = json.email_linked;
        this._google_linked = json.google_linked;
        this._github_linked = json.github_linked;
        this._phone_linked = json.phone_linked;
        this._api_key = json.api_key;
        this._is_dev = json.is_dev;
        this._team = json.team;
        this._level = json.level;
        this._favorite_teams = json.favorite_teams;
        this._favorite_events = json.favorite_events;
        this._admin_teams = json.admin_teams;
        this._individual_admin_events = json.individual_admin_events;
        this._admin_events = json.admin_events;

        return this;
    }

    public toJSON(): any {
        return {
            uid: this._uid,
            email: this._email,
            emailVerified: this._emailVerified,
            displayName: this._displayName,
            photoURL: this._photoURL,
            phoneNumber: this._phoneNumber,
            disabled: this._disabled,
            metadata: this._metadata,
            tokensValidAfterTime: this._tokensValidAfterTime,
            email_linked: this._email_linked,
            google_linked: this._google_linked,
            github_linked: this._github_linked,
            phone_linked: this._phone_linked,
            api_key: this._api_key,
            is_dev: this._is_dev,
            team: this._team,
            level: this._level,
            favorite_teams: this._favorite_teams,
            favorite_events: this._favorite_events,
            admin_teams: this._admin_teams,
            individual_admin_events: this._individual_admin_events,
            admin_events: this._admin_events,
        };
    }


    /**
     * Getter uid
     * @return {string}
     */
    public get uid(): string {
        return this._uid;
    }

    /**
     * Getter email
     * @return {string}
     */
    public get email(): string {
        return this._email;
    }

    /**
     * Getter emailVerified
     * @return {boolean}
     */
    public get emailVerified(): boolean {
        return this._emailVerified;
    }

    /**
     * Getter displayName
     * @return {string}
     */
    public get displayName(): string {
        return this._displayName;
    }

    /**
     * Getter photoURL
     * @return {string}
     */
    public get photoURL(): string {
        return this._photoURL;
    }

    /**
     * Getter phoneNumber
     * @return {string}
     */
    public get phoneNumber(): string {
        return this._phoneNumber;
    }

    /**
     * Getter disabled
     * @return {boolean}
     */
    public get disabled(): boolean {
        return this._disabled;
    }

    /**
     * Getter tokensValidAfterTime
     * @return {string}
     */
    public get tokensValidAfterTime(): string {
        return this._tokensValidAfterTime;
    }

    /**
     * Getter email_linked
     * @return {boolean}
     */
    public get email_linked(): boolean {
        return this._email_linked;
    }

    /**
     * Getter google_linked
     * @return {boolean}
     */
    public get google_linked(): boolean {
        return this._google_linked;
    }

    /**
     * Getter github_linked
     * @return {boolean}
     */
    public get github_linked(): boolean {
        return this._github_linked;
    }

    /**
     * Getter phone_linked
     * @return {boolean}
     */
    public get phone_linked(): boolean {
        return this._phone_linked;
    }

    /**
     * Getter api_key
     * @return {string}
     */
    public get api_key(): string {
        return this._api_key;
    }

    /**
     * Getter is_dev
     * @return {boolean}
     */
    public get is_dev(): boolean {
        return this._is_dev;
    }

    /**
     * Getter team
     * @return {any}
     */
    public get team(): any {
        return this._team;
    }

    /**
     * Getter level
     * @return {number}
     */
    public get level(): number {
        return this._level;
    }

    /**
     * Getter favorite_teams
     * @return {string[]}
     */
    public get favorite_teams(): string[] {
        return this._favorite_teams;
    }

    /**
     * Getter favorite_events
     * @return {string[]}
     */
    public get favorite_events(): string[] {
        return this._favorite_events;
    }

    /**
     * Getter admin_teams
     * @return {string[]}
     */
    public get admin_teams(): string[] {
        return this._admin_teams;
    }

    /**
     * Getter individual_admin_events
     * @return {any[]}
     */
    public get individual_admin_events(): any[] {
        return this._individual_admin_events;
    }

    /**
     * Getter admin_events
     * @return {string[]}
     */
    public get admin_events(): string[] {
        return this._admin_events;
    }

    /**
     * Setter uid
     * @param {string} value
     */
    public set uid(value: string) {
        this._uid = value;
    }

    /**
     * Setter email
     * @param {string} value
     */
    public set email(value: string) {
        this._email = value;
    }

    /**
     * Setter emailVerified
     * @param {boolean} value
     */
    public set emailVerified(value: boolean) {
        this._emailVerified = value;
    }

    /**
     * Setter displayName
     * @param {string} value
     */
    public set displayName(value: string) {
        this._displayName = value;
    }

    /**
     * Setter photoURL
     * @param {string} value
     */
    public set photoURL(value: string) {
        this._photoURL = value;
    }

    /**
     * Setter phoneNumber
     * @param {string} value
     */
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    /**
     * Setter disabled
     * @param {boolean} value
     */
    public set disabled(value: boolean) {
        this._disabled = value;
    }

    /**
     * Setter tokensValidAfterTime
     * @param {string} value
     */
    public set tokensValidAfterTime(value: string) {
        this._tokensValidAfterTime = value;
    }

    /**
     * Setter email_linked
     * @param {boolean} value
     */
    public set email_linked(value: boolean) {
        this._email_linked = value;
    }

    /**
     * Setter google_linked
     * @param {boolean} value
     */
    public set google_linked(value: boolean) {
        this._google_linked = value;
    }

    /**
     * Setter github_linked
     * @param {boolean} value
     */
    public set github_linked(value: boolean) {
        this._github_linked = value;
    }

    /**
     * Setter phone_linked
     * @param {boolean} value
     */
    public set phone_linked(value: boolean) {
        this._phone_linked = value;
    }

    /**
     * Setter api_key
     * @param {string} value
     */
    public set api_key(value: string) {
        this._api_key = value;
    }

    /**
     * Setter is_dev
     * @param {boolean} value
     */
    public set is_dev(value: boolean) {
        this._is_dev = value;
    }

    /**
     * Setter team
     * @param {any} value
     */
    public set team(value: any) {
        this._team = value;
    }

    /**
     * Setter level
     * @param {number} value
     */
    public set level(value: number) {
        this._level = value;
    }

    /**
     * Setter favorite_teams
     * @param {string[]} value
     */
    public set favorite_teams(value: string[]) {
        this._favorite_teams = value;
    }

    /**
     * Setter favorite_events
     * @param {string[]} value
     */
    public set favorite_events(value: string[]) {
        this._favorite_events = value;
    }

    /**
     * Setter admin_teams
     * @param {string[]} value
     */
    public set admin_teams(value: string[]) {
        this._admin_teams = value;
    }

    /**
     * Setter individual_admin_events
     * @param {any[]} value
     */
    public set individual_admin_events(value: any[]) {
        this._individual_admin_events = value;
    }

    /**
     * Setter admin_events
     * @param {string[]} value
     */
    public set admin_events(value: string[]) {
        this._admin_events = value;
    }



}
