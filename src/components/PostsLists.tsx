import React, { useEffect, useState } from "react";
import { posts } from "./postExample";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from "styled-components"; 
import { Grid } from "@mui/material";
import { Button } from "./Button";

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export const PostsList = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [postsOnPage, setPostsOnPage] = useState<any>([]);

  useEffect(() => {
    const firstPost = (page - 1) * itemsPerPage;

    const newPostsOnPage = posts.slice(firstPost, firstPost + itemsPerPage);
    setPostsOnPage(newPostsOnPage);
  }, [page, itemsPerPage]);

  const nextPage = () => {
    if (page < getPagesCount()) {
      setPage(page + 1);
    }
  };

  const backPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const getPagesCount = () => {
    return Math.ceil(posts.length / itemsPerPage);
  }

  return (
    <Container >
      <Grid container spacing={5}>
        {postsOnPage.map((post:any) => (
          <Grid key={post.id} item xs={4}> 
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">{post.title}</Typography>
                <Typography variant="body2">{post.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} mt="20px" mb="50px" justifyContent="flex-end">
        <Grid item xs="auto">
          <Button onClick={backPage} variant='contained' disabled={page <= 1}>
            {'<'}
          </Button>
        </Grid>
        <Grid>
          <Typography variant="body2">
            {`Page: ${page}`}
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <Button onClick={nextPage} variant='contained' disabled={page >= getPagesCount()}>
            {'>'}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
