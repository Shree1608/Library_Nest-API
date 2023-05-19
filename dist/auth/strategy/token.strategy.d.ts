import { Strategy } from "passport-jwt";
type JwtPayload = {
    id: string;
};
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: JwtPayload): JwtPayload;
}
export {};
