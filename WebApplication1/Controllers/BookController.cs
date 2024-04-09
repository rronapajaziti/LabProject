using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BooksContext _booksContext;
        public BookController(BooksContext booksContext)
        {
            _booksContext = booksContext;
            
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> getBooks()
        {
            if(_booksContext.Books == null)
            {
                return NotFound();
            }
            return await _booksContext.Books.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            if (_booksContext.Books == null)
            {
                return NotFound();
            }
            var book = await _booksContext.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            else
            {
                return book;
            }
        }
        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {
            _booksContext.Books.Add(book);
            await _booksContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBook), new { id = book.ID }, book);
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> PutBook(int id, Book book)
        {
            if (id != book.ID)
            {
                return BadRequest();
            }
            _booksContext.Entry(book).State = EntityState.Modified;
            try
            {
                await _booksContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult> DeleteBook(int id)
        {
            if (_booksContext.Books == null)
            {
                return NotFound();
            }
            var book = await _booksContext.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            _booksContext.Books.Remove(book);
            await _booksContext.SaveChangesAsync();
            return Ok();
        }
    }
}
