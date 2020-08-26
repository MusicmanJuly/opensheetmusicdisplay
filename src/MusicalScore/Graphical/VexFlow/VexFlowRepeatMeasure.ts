import Vex from "vexflow";
import { SourceMeasure } from "../../VoiceData/SourceMeasure";
import { Staff } from "../../VoiceData/Staff";
import { StaffLine } from "../StaffLine";
import { VexFlowNotelessMeasure } from "./VexFlowNotelessMeasure";

// type StemmableNote = Vex.Flow.StemmableNote;

/** A GraphicalMeasure drawing a multiple-rest measure in Vexflow.
 *  Mostly copied from VexFlowMeasure.
 *  Even though most of those functions aren't needed, apparently you can't remove the layoutStaffEntry function.
 */
export class VexFlowRepeatMeasure extends VexFlowNotelessMeasure {
    private multiRestElement: any; // TODO remove

    constructor(staff: Staff, sourceMeasure: SourceMeasure = undefined, staffLine: StaffLine = undefined) {
        super(staff, sourceMeasure, staffLine);

        // TODO create repeat measure glyph instead. this shows the number of repeat measures for now for debugging.
        this.multiRestElement = new Vex.Flow.MultiMeasureRest(
            sourceMeasure.repeatMeasures, {
            // number_line: 3
        });
    }

    /**
     * Draw this measure on a VexFlow CanvasContext
     * @param ctx
     */
    public draw(ctx: Vex.IRenderContext): void {
        super.draw(ctx);

        this.multiRestElement.setStave(this.stave);
        this.multiRestElement.setContext(ctx);
        this.multiRestElement.draw();
    }
}