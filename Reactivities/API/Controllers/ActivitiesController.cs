using Application.Activies.Queries;
using Application.Activities.Commands;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    [HttpGet()]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        // return await context.Activities.ToListAsync();
        return await Mediator.Send(new GetActivityList.Query());
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivitiesDetail(string id)
    {
        // var activity = await context.Activities.FindAsync(id);
        // if (activity == null) return NotFound();
        // return activity;
        return await Mediator.Send(new GetActivityDetails.Query { Id = id });
    }
    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(Activity activity)
    {
        return await Mediator.Send(new CreateActivity.Command { Activity = activity });
    }
    [HttpPut]
    public async Task<ActionResult> EditActivity(Activity activity)
    {
        await Mediator.Send(new EditActivity.Command { Activity = activity });
        return NoContent();
    }
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity(string id)
    {
        await Mediator.Send(new DeleteActivity.Command { Id = id });
        return Ok();
    }
}