import { Grommet } from "grommet";
import { isPlainObject } from "lodash";

const myTheme = {
    global: {
        font: {
            family: "Roboto",
        },
    },
};

export default function withTheme(theme) {
    return (Component) => (props) =>
        (
            <Grommet
                theme={{ ...myTheme, ...(isPlainObject(theme) ? theme : {}) }}
            >
                <Component {...props} />
            </Grommet>
        );
}
