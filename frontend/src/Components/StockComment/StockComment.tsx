import React from 'react';
import StockCommentForm from './StockCommentForm/StockCommentForm';
import { commentGetAPI, commentPostAPI } from '../../Services/CommentService';
import { toast } from 'react-toastify';

type Props = {
  stockSymbol: string;
};

type CommentFromInputs = {
  title: string;
  content: string;
};

const StockComment = ({stockSymbol}: Props) => {
  const handleComment = (e: CommentFromInputs) => {
    commentPostAPI(e.title, e.content, stockSymbol).
    then((res) => {
      if(res) {
        toast.success("Comment posted successfully");
      }
    }).catch((err) => {
      toast.warning(err);
    });
  };
  return <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />;
};

export default StockComment;
