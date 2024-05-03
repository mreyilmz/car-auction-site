using Microsoft.EntityFrameworkCore;

namespace AuctionService.Entities;

public class AuctionDbContext : DbContext
{
  public AuctionDbContext(DbContextOptions options) : base(options)
  {
  }

  public DbSet<Auction> Auctions { get; set; }
}
