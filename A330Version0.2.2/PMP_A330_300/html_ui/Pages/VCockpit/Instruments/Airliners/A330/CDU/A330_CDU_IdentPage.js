class CDUIdentPage {
    static ShowPage(mcdu) {
        let date = mcdu.getNavDataDateRange();
        mcdu.clearDisplay();
        mcdu.setTemplate([
            ["A330-343"],
            ["ENG"],
            ["TRENT772B-60"+"[color]green"],
            ["ACTIVE DATA BASE"],
            [date + "[color]blue", "AIRAC"],
            ["SECOND DATA BASE"],
            ["←" + date + "[color]blue"],
            [""],
            [""],
            ["CHG CODE"],
            ["[   ][color]blue"],
            ["IDLE/PERF"],
            ["+0.0/+0.0[color]green"],
        ]);
    }
}
//# sourceMappingURL=A320_Neo_CDU_IdentPage.js.map