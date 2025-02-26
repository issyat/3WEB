import Carre from "./Carre"
import Section from "./Section"

const ReverseContentCenter = () => {
    return (
        <Section title="Reverse-Content-Center | Align Items : Center" display="flex" justifyContent="center" alignItems="center" flexDirection="row-reverse">
            <Carre />
            <Carre color="green"/>
            <Carre color="orange"/>
        </Section>
    )
}

export default ReverseContentCenter