import { Box, InputAdornment, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSearchBox } from "react-instantsearch-hooks";
import SearchIcon from "@mui/icons-material/Search";

export default function TextSearch(props) {
  const { query, refine } = useSearchBox(props);
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    if (inputRef.current) {
      inputRef.current.blur();
    }
  }

  function handleReset(event) {
    event.preventDefault();
    event.stopPropagation();

    setInputValue("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  useEffect(() => {
    if (query !== inputValue) {
      refine(inputValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, refine]);

  useEffect(() => {
    if (document.activeElement !== inputRef.current && query !== inputValue) {
      setInputValue(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
      <Box
        component="form"
        className="ais-SearchBox-form"
        noValidate
        sx={{ display: "flex", justifyContent: "center", p: { xs: 2, md: 4 } }}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <TextField
          label="Pencarian"
          sx={{
            width: "80%",
          }}
          placeholder="Cari Keramik Apa ?"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="secondary" />
              </InputAdornment>
            ),
          }}
          ref={inputRef}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          maxLength={512}
          type="search"
          onChange={(event) => setInputValue(event.currentTarget.value)}
        />
      </Box>
  );
}
