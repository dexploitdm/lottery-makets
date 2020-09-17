import { Russian } from "flatpickr/dist/l10n/ru.js"
export default function initFlatpickr() {

    $(".flatpickr").flatpickr(
        {
            dateFormat: "d.m.Y",
            "locale": Russian
        }
    );
}