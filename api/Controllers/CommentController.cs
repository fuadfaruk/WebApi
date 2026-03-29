using api.Interfaces;
using api.Mappers;
using api.Dtos.Comment;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IStockRepository _stockRepository;
        public CommentController(ICommentRepository commentRepo, IStockRepository stockRepository)
        {
            _commentRepository = commentRepo;
            _stockRepository = stockRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var comments = await _commentRepository.GetAllAsync();
            var commentDto = comments.Select(s => s.ToCommentDto());
            return Ok(commentDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var comment = await _commentRepository.GetByIdAsync(id);

            if (comment == null)
            {
                return NotFound();
            }
            var commentDto = comment.ToCommentDto();

            return Ok(commentDto);
        }

        [HttpPost("{stockId}")]
        public async Task<IActionResult> Create([FromRoute] int stockId, CreateCommentDto commentDto)
        {
            if(!await _stockRepository.StockExists(stockId))
            {
                return BadRequest("Stock with the given ID does not exist.");
            }

            var commentModel = commentDto.ToCommentFromCreate(stockId);
            await _commentRepository.CreateAsync(commentModel);

            return CreatedAtAction(nameof(GetById), new { id = commentModel.Id }, commentModel.ToCommentDto());
        }
    }
}
