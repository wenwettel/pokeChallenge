import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { AccordionStyles } from "./AccordionStyles";
import { capitalizeFirstLetter } from "../../utils";
import Chip from "@mui/material/Chip";

function AccordionPokemonDetails({ abilities, evolutions, games, type }) {
  return (
    <AccordionStyles color={type}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="title">ABILITIES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {abilities
              ?.map((ability) => capitalizeFirstLetter(ability.ability.name))
              .join(", ")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      {evolutions && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="title">EVOLUTIONS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {evolutions?.length ? (
              evolutions.map((evolution) => {
                const id = evolution.url.split("/").slice(-2, -1)[0];
                return (
                  <Link key={id} to={`/pokemon/${id}`}>
                    <Chip
                      clickable
                      variant="outlined"
                      label={capitalizeFirstLetter(evolution?.name)}
                    />
                  </Link>
                );
              })
            ) : (
              <p>None</p>
            )}
          </AccordionDetails>
        </Accordion>
      )}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="title">GAMES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {games
              ?.map((game) => capitalizeFirstLetter(game.version.name))
              .join(", ")}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionStyles>
  );
}

export default AccordionPokemonDetails;
