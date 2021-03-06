import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PokemonsList } from "components/pokemons-list";
import { PokemonDetails } from "../components/pokemon-details";

type TParams = { id: string };

interface DetailsScreenProps extends RouteComponentProps<TParams> {}

const DetailsScreen: React.VFC<DetailsScreenProps> = ({ match }) => {
  const { id } = match.params;

  useEffect(() => {
    if (id) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [id]);

  return (
    <>
      <AnimatePresence initial={false}>
        <PokemonsList />
        {id && <PokemonDetails id={id} key="item" />}
      </AnimatePresence>
    </>
  );
};

export default DetailsScreen;
