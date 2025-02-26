
import Carre from "./Carre";
import Section from "./Section";


const JustifyContentCenter = () => {
    return (
        <Section title="Justify-Content-Center | Align Items : Center" display="flex" justifyContent="center" alignItems="center">
            <Carre />
            <Carre color="green"/>
            <Carre color="orange"/>
        </Section>
    );
};

export default JustifyContentCenter;