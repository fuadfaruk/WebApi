using api.Data;
using api.Models;
using api.Dtos.Stock;
using api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class StockRepository : IStockRepository
    {
        private readonly ApplicationDBContext _context;
        public StockRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Stock> CreateAsync(Stock stockModel)
        {
            await _context.Stocks.AddAsync(stockModel);
            await _context.SaveChangesAsync();

            return stockModel;
        }

        public async Task<Stock?> DeleteAsync(int id)
        {
            var stockModel = await _context.Stocks.FirstOrDefaultAsync(s => s.Id == id);

            if (stockModel == null)
            {
                return null;
            }

            _context.Stocks.Remove(stockModel);
            await _context.SaveChangesAsync();

            return stockModel;
        }

        public async Task<Stock?> GetByIdAsync(int id)
        {
            return await _context.Stocks.Include(c => c.Comments).FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<Stock?> UpdateAsync(int id, UpdateStockRequestDto stockDto)
        {
            var exitstingStock = await _context.Stocks.FirstOrDefaultAsync(s => s.Id == id);

            if(exitstingStock == null)
            {
                return null;
            }

            exitstingStock.Symbol = stockDto.Symbol;
            exitstingStock.CompanyName = stockDto.CompanyName;
            exitstingStock.Purchase = stockDto.Purchase;
            exitstingStock.LastDiv = stockDto.LastDiv;
            exitstingStock.Industry = stockDto.Industry;
            exitstingStock.MarketCap = stockDto.MarketCap;

            await _context.SaveChangesAsync();
            
            return exitstingStock;
        }

        public async Task<List<Stock>> GetAllAsync()
        {
            return await _context.Stocks.Include(c => c.Comments).ToListAsync();
        }
    }
}
